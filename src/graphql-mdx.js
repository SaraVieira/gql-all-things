import React from 'react'
import graphql from 'graphql-anywhere'

function traverse(obj) {
  var stack = []

  stack.push(obj)

  while (stack.length) {
    for (var j in stack[0]) {
      if (typeof stack[0][j] === 'object') {
        stack.push(stack[0][j])
      } else {
        console.log('%s: %s', j, stack[0][j])
      }
    }
    stack.shift()
  }
}

const smoosh = object =>
  Object.assign(
    {},
    ...(function _flatten(objectBit) {
      return [].concat(
        ...Object.keys(objectBit).map(
          key =>
            typeof objectBit[key] === 'object'
              ? _flatten(objectBit[key])
              : { [key]: objectBit[key] }
        )
      )
    })(object)
  )

const resolver = (fieldName, root, args, context, { resultKey }) => {
  return {
    tag: fieldName,
    ...args
  }
}

// Main function to generate glamorous component with styles
const GraphQLMDX = query => {
  const generatedGQL = graphql(resolver, query.query)

  console.log(traverse(generatedGQL))
  // const ReactComponent = React.createElement(
  //   component.tag,
  //   { ...component },
  //   component.content
  // )

  // return ReactComponent
}

// Export render props component
export const WithGraphQLMDX = ({ query, ...rest }) => GraphQLMDX(query)

export default GraphQLMDX

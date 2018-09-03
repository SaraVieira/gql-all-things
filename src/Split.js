import React from 'react'
import styled from 'styled-components'
import Flex from 'mdx-deck/dist/Flex'
import Box from 'mdx-deck/dist/Box'
import Footer from './footer'

const Root = styled.div([], {
  width: '100vw',
  height: '100vh'
})

const Half = styled(Box)`
  position: relative;
  > * {
    max-width: 100%;
    transform: none !important;
    left: 0 !important;
  }
`

const Split = ({ children }) => {
  const kids = React.Children.toArray(children.props.children)
  const times = kids.length

  return (
    <Root>
      <Flex
        css={{
          alignItems: 'center',
          height: '100%'
        }}
      >
        {kids.map(k => (
          <Half key={k} width={1 / times}>
            {k}
          </Half>
        ))}
      </Flex>
    </Root>
  )
}

export default Split

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
    top: 0 !important;
  }
`

const Wrapper = styled(Flex)`
  align-items: center;
  height: 100%;
`

const Split = ({ children }) => {
  const kids = React.Children.toArray(children.props.children)
  const numberOfChildren = kids.length

  return (
    <Root>
      <Wrapper>
        {kids.map(k => (
          <Half key={k.key} width={1 / numberOfChildren}>
            {k}
          </Half>
        ))}
      </Wrapper>
    </Root>
  )
}

export default Split

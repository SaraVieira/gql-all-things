import React, { Fragment, Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Dots from 'mdx-deck/dist/Dots'
import { previous, next } from 'mdx-deck/dist/updaters'
import { modes } from 'mdx-deck/dist/constants'
import Footer from './footer'

const Bottom = styled.div([], {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0
})

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Raleway:400,900');
    img {
        position: relative;
        max-height: 90vh;
        max-width: 100%;
        width: auto !important;
        left: 50% !important;
        top: 50vh !important;
        transform: translateY(-50%) translateX(-50%) !important;
    }
`

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Bar = styled.div`
  background: #dc5f53;
  height: 2px;
  width: ${props => 100 * props.size}%;
`

export default class Provider extends Component {
  render() {
    const { children, mode, index, length, update } = this.props

    if (mode !== modes.normal) {
      return <Fragment>{children}</Fragment>
    }

    return (
      <Fragment>
        <Wrapper>{children}</Wrapper>
        <Footer />
        <Bottom>
          <Bar size={(index + 1) / length} />
        </Bottom>
      </Fragment>
    )
  }
}

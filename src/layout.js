import React, { Fragment } from 'react'
import styled from 'styled-components'
import Footer from './footer'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer />
  </Fragment>
)

export default Layout

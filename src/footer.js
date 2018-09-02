import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 14px;
  color: white;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 1px solid #dc5f53;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  font-family: Futura, sans-serif;
`

export default () => (
  <Footer>
    <span>React Native EU 🇵🇱</span>
    <span>@NIkkitaFTW</span>
  </Footer>
)

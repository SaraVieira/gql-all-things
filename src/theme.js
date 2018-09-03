// example theme.js
import theme from 'mdx-deck/themes'
import Provider from './Provider'

export default {
  ...theme,
  font: 'Futura, sans-serif',
  Provider,
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  h2: {
    color: 'white'
  },
  p: {
    color: 'white',
    fontFamily: 'Avenir, arial',
    fontSize: '39px',
    fontStyle: 'italic'
  },
  monospace: '"Dank Mono", monospace',
  weights: 400,
  img: {
    maxHeight: '80vh',
    maxWidth: '100%'
  },
  li: {
    paddingBottom: '20px',
    fontFamily: 'Avenir, arial',
    color: 'white',
    fontSize: '30px',
    lineHeight: 1.5
  },
  ul: {
    paddingLeft: '50px',
    display: 'inline-block'
  },
  colors: {
    text: '#6AD798',
    background: 'rgb(1, 22, 39)',
    link: '#fff',
    pre: '#fff',
    preBackground: '#051626',
    code: '#fff'
  }
}

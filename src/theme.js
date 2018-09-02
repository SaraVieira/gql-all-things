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
  monospace: '"Dank Mono", monospace',
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontFamily: '"Dank Mono", monospace'
  },
  ul: {
    listStyle: 'none',
    paddingLeft: '20px',
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

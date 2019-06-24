import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
import theme from './theme'

const globalRules = `
  html {
    box-sizing: border-box;
    width: 1024px;
    margin: 0 auto;
    font-family: ${theme.fonts.main};
    color: ${theme.colors.green};
    background-color: #F0F8FF;
    font-weight: 500;
    font-size: 16px;
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
`

const GlobalStyle = createGlobalStyle`${normalize} ${globalRules}`

export default GlobalStyle

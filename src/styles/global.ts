import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --black: #000000;
  --white: #fff;
  --gray: #808080;
  --deep-gray: #333333;
  --red: #ff0000;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline: 1px solid red; */

  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:#eeede7;
  }
`
export default GlobalStyle

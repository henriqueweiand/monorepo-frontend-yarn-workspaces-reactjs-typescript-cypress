import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  
  * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;

      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      &::-webkit-scrollbar-track {
        background: #eee;
      }
      &::-webkit-scrollbar-thumb {
        background: #ccc;
        -webkit-box-shadow: inset 0 0 1px #565656;
        box-shadow: inset 0 0 1px #565656;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(left, #888, #777);
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
   body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${theme.palette.background.default};

    background-color: ${theme.palette.background.default};
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #eee;
    }
    &::-webkit-scrollbar-thumb {
      background: #a3a3a3;
      -webkit-box-shadow: inset 0 0 1px #565656;
      box-shadow: inset 0 0 1px #565656;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(left, #888, #777);
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export { GlobalStyle }

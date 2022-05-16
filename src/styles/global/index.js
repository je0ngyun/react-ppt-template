import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${reset};
  //${normalize};
  * {
  box-sizing: border-box;
  }
  html,
  body {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background_color};
    color: ${({ theme }) => theme.colors.text_color};
    padding: 30px;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  .transition-group {
  width  :100% ;
  height: 100%;
  position: relative;
  overflow-x: hidden;
}

.pageleft-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  z-index: 1;
}
.pageleft-enter-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: all 800ms ease-in-out
}
.pageleft-exit {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.pageleft-exit-active {
  opacity: 0;
  transform: translate3d(200%, 0, 0);
  transition: all 800ms ease-in-out
}

.pageright-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
  z-index: 1;
}
.pageright-enter-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: all 800ms ease-in-out
}
.pageright-exit {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.pageright-exit-active {
  opacity: 0;
  transform: translate3d(-200%, 0, 0);
  transition: all 800ms ease-in-out
}
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #5C00FF;
    --purpleDarker: #2F1160;
    --green: #68E2AA;
    --white: #FFFFFF;
    --grey: #BABABA;

    --container: 100rem;
    --smaller: 1.125rem;
    --small: 1.5rem;
    --subtitle: 2.5rem;
    --regular: 2rem;
    --medium: 3rem;
    --title: 4rem;
    --large: 5rem;

    --paddingLeft: 7.5vw;
    --paddingLeft2: 7.8vw;
    --paddingTop: 9vw;
    --paddingTop2: 7.0vw;

    --paddingTopSmall: 2.20vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  /* @font-face {
    font-family: 'Anago';
    font-weight: 900;
    src: local('Anago'), url(fonts/Anago-Black.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Anago';
    font-weight: 900;
    src: local('Anago'), url(fonts/Anago-BlackItalic.ttf) format('opentype');
  } */

  @font-face {
    font-family: 'Anago';
    font-weight: 700;
    src: local('Anago'), url(fonts/Anago-Bold.ttf) format('opentype');
  }

  /* @font-face {
    font-family: 'Anago';
    font-weight: 700;
    src: local('Anago'), url(fonts/Anago-BoldItalic.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Anago';
    src: local('Anago'), url(fonts/Anago-Book.ttf) format('opentype');
  }

  @font-face {
    font-family: 'Anago';
    src: local('Anago'), url(fonts/Anago-BookItalic.ttf) format('opentype');
  } */

  @font-face {
    font-family: 'Anago';
    font-weight: 400;
    src: local('Anago'), url(fonts/Anago-Medium.ttf) format('opentype');
  }

  /* @font-face {
    font-family: 'Anago';
    font-weight: 400;
    src: local('Anago'), url(fonts/Anago-MediumItalic.ttf) format('opentype');
  } */

  @font-face {
    font-family: 'Anago';
    font-weight: 100;
    src: local('Anago'), url(fonts/Anago-Thin.ttf) format('opentype');
  }

  /* @font-face {
    font-family: 'Anago';
    font-weight: 100;
    src: local('Anago'), url(fonts/Anago-ThinItalic.ttf) format('opentype');
  } */

  button {
    cursor: pointer;
  }
`

export default GlobalStyles

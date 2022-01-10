import React from "react";
import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
}
.header {
    height: 5rem;
    padding-left: 2rem;
    display: grid;
    align-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  .header-center {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  .header-nav {
    display: grid;
    grid-template-columns: auto 1fr;
    font-size: 24px;
    align-items: center;
  }

  .link {
      margin-right: 3rem;
  }
  .nav-links {
    

  }

  .header-logo {
      width: 6rem;
      padding-right: 2rem;  
  }

  .login {
      justify-self: end;
      margin-right: 4rem;
  }

  .banner {
      height: 8rem;
      padding-left: 3rem;
      background: black;
      color: white;
  }

  .banner-name {
      font-size: 18px;
      padding-top: 1rem;
  }

  .banner-title {
      font-size: 40px;
      margin-top: -12px;
  }
`

export const wrapRootElement = ({ element }) => {
    return <>
        <GlobalStyle />
        {element}
    </>
}
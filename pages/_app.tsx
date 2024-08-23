import "../styles/globalCss.css";
import { Fragment } from "react";
import { FontStyles } from "../styles/fontStyle";
import { typoStyles } from "../styles/typography";
import rootColorStyles  from "../styles/color";
import { createGlobalStyle } from "styled-components";

const SiteGlobalStyle = createGlobalStyle`
    ${FontStyles}
    ${rootColorStyles}
`;

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <SiteGlobalStyle />
      <style jsx global>
        {typoStyles}
      </style>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;

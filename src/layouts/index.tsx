import * as React from "react";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import * as styles from "../styles";

// tslint:disable-next-line no-unused-expression
injectGlobal`
  :root {
    background: ${styles.bgBase};
    background-image: repeating-linear-gradient(
      -25deg,
      hsla(0, 0%, 0%, 0.05),
      hsla(0, 0%, 0%, 0.05) 11px,
      transparent 0,
      transparent 127px
    ),
    repeating-linear-gradient(
      -25deg,
      hsla(0, 0%, 0%, 0.05),
      hsla(0, 0%, 0%, 0.05) 17px,
      transparent 0,
      transparent 197px
    ),
    repeating-linear-gradient(
      -25deg,
      hsla(0, 0%, 0%, 0.05),
      hsla(0, 0%, 0%, 0.05) 5px,
      transparent 0,
      transparent 269px
    );
    box-sizing: border-box;
    color: ${styles.colorText};
    font-family: ${styles.fontFamilyBase};
    font-weight: 300;
    min-height: 100vh;
  }

  @page {
    margin: 0;
    size: A4;
  }

  html,
  body {
    margin: 0;
    min-height: 100vh;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  a,
  a:active,
  a:visited {
    color: inherit;
  }
`;

const TemplateWrapper: React.SFC<Props> = ({ children }) => (
  <div>
    <Helmet>
      <title>Rubén Illodo Brea</title>
    </Helmet>
    {children()}
  </div>
);

interface Props {
  children: () => any;
}

export default TemplateWrapper;

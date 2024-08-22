/** @type { import('@storybook/react').Preview } */

import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import rootColorStyles  from "../public/styles/color.ts"

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const SiteGlobalStyle = createGlobalStyle`
  ${rootColorStyles}
`;

const styles = (Story, context) => {
  return (
    <Fragment>
      <SiteGlobalStyle />
      <Story {...context} />
    </Fragment>
  );
};

export const decorators = [styles];
export default preview;

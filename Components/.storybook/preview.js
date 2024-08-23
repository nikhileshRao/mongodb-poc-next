/** @type { import('@storybook/react').Preview } */

import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import rootColorStyles  from "../public/styles/color.ts";
import { FontStyles } from "../public/styles/fontStyle.ts";
import { typoStyles } from "../public/styles/typography.ts";

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
  ${FontStyles}
`;

const styles = (Story, context) => {
  return (
    <Fragment>
      <SiteGlobalStyle />
      <style jsx global>
        {typoStyles}
      </style>
      <Story {...context} />
    </Fragment>
  );
};

export const decorators = [styles];
export default preview;

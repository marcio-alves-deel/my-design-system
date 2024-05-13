import type { Preview } from "@storybook/react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "../src/themes/defaultTheme";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: defaultTheme,
      },
      defaultTheme: "default",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </ThemeProvider>
      ),
    },
  },
};

export default preview;

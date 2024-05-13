import { ThemeOptions, createTheme } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";
import { typography } from "./typography";

const theme: ThemeOptions = {
  breakpoints,
  shape: {
    borderRadius: 0,
  },
  palette,
  typography,
};

export const defaultTheme = createTheme(theme);

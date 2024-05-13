import { defaultTheme } from "@/themes/defaultTheme";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

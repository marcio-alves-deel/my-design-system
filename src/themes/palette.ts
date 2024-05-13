import { ThemeOptions } from "@mui/material";

export const palette = {
  text: {
    primary: "#01090f",
    secondary: "#5c5c5c",
    disabled: "#7c8286",
  },
  primary: {
    main: "#3D8EC9", // Cor principal
    light: "#62B2EB", // Variante clara
    dark: "#2A6BA1", // Variante escura
    contrastText: "#ffffff", // Texto em contraste
  },
  secondary: {
    main: "#EFEFEF", // Cor principal
    light: "#FFFFFF", // Variante clara
    dark: "#C0C0C0", // Variante escura
    contrastText: "#2c2c2c", // Texto em contraste
  },
  error: {
    main: "#CE0000", // Cor principal
    light: "#FF3333", // Variante clara
    dark: "#990000", // Variante escura
    contrastText: "#ffffff", // Texto em contraste
  },
  warning: {
    main: "#F9A13A", // Cor principal
    light: "#FFB56B", // Variante clara
    dark: "#CC7D00", // Variante escura
    contrastText: "#ffffff", // Texto em contraste
  },
  success: {
    main: "#34B831", // Cor principal
    light: "#66DC66", // Variante clara
    dark: "#007D00", // Variante escura
    contrastText: "#ffffff", // Texto em contraste
  },
  info: {
    main: "#62B2EB", // Cor principal
    light: "#8CD3FF", // Variante clara
    dark: "#3A90D6", // Variante escura
    contrastText: "#ffffff", // Texto em contraste
  },
  divider: "#E0E0E0", // Cor do divisor
} satisfies ThemeOptions["palette"];

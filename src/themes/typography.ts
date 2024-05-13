import { ThemeOptions } from "@mui/material";

export const typography = {
  fontFamily: ["Helvetica", "sans-serif"].join(","),
  h1: {
    fontSize: 96,
    letterSpacing: "-1.5px",
    fontWeight: "600",
  },
  h2: {
    fontSize: 60,
    letterSpacing: "-0.5px",
    fontWeight: "400",
  },
  h3: {
    fontSize: 48,
    letterSpacing: "0px",
    fontWeight: "600",
  },
  h4: {
    fontSize: 34,
    letterSpacing: "0.25px",
    fontWeight: "600",
  },
  h5: {
    fontSize: 24,
    letterSpacing: "0px",
  },
  h6: {
    fontSize: 20,
    letterSpacing: "0.15px",
    fontWeight: "600",
  },
  subtitle1: {
    fontSize: 16,
    letterSpacing: "0.15px",
    fontWeight: "400",
  },
  subtitle2: {
    fontSize: 14,
    letterSpacing: "0.1px",
    fontWeight: "600",
  },
  body1: {
    fontSize: 16,
    letterSpacing: "0.5px",
  },
  body2: {
    fontSize: 14,
    letterSpacing: "0.25px",
  },
  button: {
    fontSize: 14,
    letterSpacing: "1.25px",
    textTransform: "uppercase",
  },
  caption: {
    fontSize: 12,
    letterSpacing: "0.4px",
  },
} satisfies ThemeOptions["typography"];

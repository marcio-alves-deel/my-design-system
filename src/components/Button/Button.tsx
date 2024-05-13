import {
  Button as ButtonBase,
  ButtonProps as ButtonBaseProps,
} from "@mui/material";
import { FunctionComponent } from "react";

interface ButtonProps extends ButtonBaseProps {}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
};

export default Button;

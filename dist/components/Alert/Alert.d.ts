import { AlertProps as AlertPropsBase } from "@mui/material";
import { FunctionComponent } from "react";
interface AlertProps extends AlertPropsBase {
    label: string;
}
declare const Alert: FunctionComponent<AlertProps>;
export default Alert;

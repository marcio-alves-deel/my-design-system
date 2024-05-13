import { BaseSelectProps } from "@mui/material";
import { FunctionComponent } from "react";
interface SelectProps extends BaseSelectProps {
    options: {
        label?: string;
        value?: string;
    }[];
}
declare const Select: FunctionComponent<SelectProps>;
export default Select;

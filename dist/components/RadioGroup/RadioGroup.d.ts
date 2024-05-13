import { RadioGroupProps as BaseRadioGroupProps } from "@mui/material";
import { FunctionComponent } from "react";
interface RadioGroupProps extends BaseRadioGroupProps {
    disabled?: boolean;
    options: {
        label?: string;
        value?: string;
    }[];
}
declare const RadioGroup: FunctionComponent<RadioGroupProps>;
export default RadioGroup;

import { palette } from "@/themes/palette";
import {
  RadioGroupProps as BaseRadioGroupProps,
  FormControlLabel,
  Radio,
  RadioGroup as RadioGroupBase,
} from "@mui/material";
import { FunctionComponent } from "react";

interface RadioGroupProps extends BaseRadioGroupProps {
  disabled?: boolean;
  options: {
    label?: string;
    value?: string;
  }[];
}

const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  options,
  disabled,
  ...props
}) => {
  return (
    <RadioGroupBase
      {...props}
      sx={{
        minWidth: 150,
        ...(disabled
          ? {
              pointerEvents: "none",
              "& .MuiRadio-root": {
                color: palette.text.disabled,
              },
            }
          : {}),
      }}
    >
      {options.map(({ label, value }) => (
        <FormControlLabel value={value} control={<Radio />} label={label} />
      ))}
    </RadioGroupBase>
  );
};

export default RadioGroup;

import { BaseSelectProps, MenuItem, Select as SelectBase } from "@mui/material";
import { FunctionComponent } from "react";

interface SelectProps extends BaseSelectProps {
  options: {
    label?: string;
    value?: string;
  }[];
}

const Select: FunctionComponent<SelectProps> = ({ options, ...props }) => {
  const renderValue = (value: any) => {
    if (Array.isArray(value)) {
      return value
        .map((v) => options.find((option) => option.value === v)?.label)
        .join(", ");
    }
    return options.find((option) => option.value === value)?.label;
  };

  return (
    <SelectBase
      {...props}
      renderValue={renderValue}
      sx={{
        minWidth: 150,
      }}
    >
      {options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </SelectBase>
  );
};

export default Select;

import { ChipProps as ChipPropsBase, Chip as ChipBase } from "@mui/material";
import { FunctionComponent } from "react";

interface ChipProps extends ChipPropsBase {}

const Chip: FunctionComponent<ChipProps> = ({ sx, ...props }) => {
  return (
    <ChipBase
      variant="outlined"
      {...props}
      sx={{
        "&.MuiChip-clickable": {
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "black",
            color: "black",
          },
        },
        "&.MuiChip-deletable": {
          backgroundColor: "#D9D9D9",
          borderColor: "#D9D9D9",
          color: "black",
        },
        ...sx,
      }}
    />
  );
};

export default Chip;

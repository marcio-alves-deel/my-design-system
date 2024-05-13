import { palette } from "@/themes/palette";
import {
  AlertProps as AlertPropsBase,
  Alert as AlertBase,
} from "@mui/material";
import { FunctionComponent } from "react";

interface AlertProps extends AlertPropsBase {
  label: string;
}

const Alert: FunctionComponent<AlertProps> = ({ label, sx, ...props }) => {
  return (
    <AlertBase
      variant="outlined"
      {...props}
      sx={{
        "&.MuiAlert-colorError": {
          color: "white",
          backgroundColor: palette.error.main,
          "& .MuiAlert-icon": {
            color: "white",
          },
        },
        "&.MuiAlert-colorSuccess": {
          color: "white",
          backgroundColor: palette.success.main,
          "& .MuiAlert-icon": {
            color: "white",
          },
        },
        "&.MuiAlert-colorWarning": {
          color: "white",
          backgroundColor: palette.warning.main,
          "& .MuiAlert-icon": {
            color: "white",
          },
        },
        "&.MuiAlert-colorInfo": {
          color: "white",
          backgroundColor: palette.info.main,
          "& .MuiAlert-icon": {
            color: "white",
          },
        },
        ...sx,
      }}
    >
      {label}
    </AlertBase>
  );
};

export default Alert;

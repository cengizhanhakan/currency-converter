import ButtonBase from "@mui/material/ButtonBase";
import { colors } from "/constants";

const LogInButton = () => {
  return (
    <ButtonBase
      sx={{
        color: colors.blue100,
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "21px",
        borderRadius: "4px",
        height: {
          md: "33px",
          xs: "auto",
        },
        width: {
          md: "90px",
          xs: "auto",
        },
        padding: {
          md: "6px",
          xs: "6px 16px",
        },
        background: "#E9B109",
        filter: "drop-shadow(1px 2px 5px rgba(0, 0, 0, 0.15))",
        "&:hover": {
          background: colors.yellow75,
        },
      }}
    >
      Log In
    </ButtonBase>
  );
};

export default LogInButton;

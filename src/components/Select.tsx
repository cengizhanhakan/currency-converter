import { Select as BaseSelect } from "@mui/material";
import { styled } from "@mui/system";

export const CustomSelect = styled(BaseSelect)({
  display: "flex",
  height: 40,
  backgroundColor: "rgba(20, 34, 65, 1)",
  "& .MuiSelect-select.MuiInputBase-input": {
    height: 40,
    display: "flex",
    alignItems: "center",
    border: "none",
    fontSize: 14,
    lineHeight: "21px",
  },
  "& .MuiSelect-select:focus": {
    backgroundColor: "unset",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
  "& fieldset": {
    border: "none",
  },
});

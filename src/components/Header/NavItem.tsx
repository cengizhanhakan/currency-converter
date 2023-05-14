import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { colors } from "/constants";

interface Props {
  label: string;
  onClick: () => void;
  isActive: boolean;
  variant: "desktop" | "mobile";
}

const NavItem = ({ label, onClick, isActive, variant }: Props) => {
  if (variant === "desktop") {
    return (
      <Link
        onClick={onClick}
        underline="none"
        sx={{
          cursor: "pointer",
          position: "relative",
          color: isActive ? colors.yellow100 : "#FFF",
          fontSize: 14,
          lineHeight: "21px",
          padding: "16px",
          "&:hover": {
            color: colors.yellow125,
          },
        }}
      >
        {label}
        {isActive && (
          <Box
            sx={{
              position: "absolute",
              marginTop: "5px",
              height: "1.5px",
              width: "24px",
              backgroundColor: colors.yellow100,
            }}
          />
        )}
      </Link>
    );
  }

  return (
    <ListItem sx={{ padding: "10px 0px" }} button>
      <ListItemText
        sx={{ color: isActive ? colors.yellow100 : "#FFF" }}
        primary={label}
      />
    </ListItem>
  );
};

export default NavItem;

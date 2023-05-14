import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { HeaderProps } from "/components/Header";
import { navItems } from "/constants";
import NavItem from "/components/Header/NavItem";
import { CurrencySelect } from "/components/CurrencySwitchers/CurrencySelect";
import LogInButton from "/components/Header/LogInButton";
import { colors } from "/constants";

export const DesktopHeader = ({ activeIndex, setActiveIndex }: HeaderProps) => {
  return (
    <Box>
      <AppBar
        elevation={4}
        sx={{
          px: "70px",
          backgroundColor: colors.blue100,
        }}
        position="relative"
      >
        <Toolbar
          sx={{
            height: 80,
          }}
        >
          <Box display="flex" alignItems="center" mr="auto">
            <img
              style={{
                height: 40,
                width: 110,
                marginRight: 40,
              }}
              src="./logo.png"
            />
            <Box
              sx={{
                display: "flex",
              }}
            >
              {navItems.map((item, index: number) => {
                const isActive = activeIndex === index;
                return (
                  <NavItem
                    variant="desktop"
                    onClick={() => setActiveIndex(index)}
                    isActive={isActive}
                    label={item}
                  />
                );
              })}
            </Box>
          </Box>
          <Box display="flex" alignItems="center" textAlign="center">
            <CurrencySelect />
            <Link
              href="/"
              underline="none"
              sx={{
                color: "#FFF",
                fontSize: 14,
                padding: "16px",
                lineHeight: "21px",
                "&:hover": {
                  color: colors.yellow75,
                },
              }}
            >
              Sign Up
            </Link>
            <LogInButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

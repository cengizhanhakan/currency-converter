import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { ButtonBase, IconButton } from "@mui/material";
import { HamburgerIcon, CloseIcon } from "/icons";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { CurrencyAccordion } from "/components/CurrencySwitchers/CurrencyAccordion";
import { colors, navItems } from "/constants";
import NavItem from "/components/Header/NavItem";
import ListItem from "@mui/material/ListItem";
import { HeaderProps } from "/components/Header";
import LogInButton from "/components/Header/LogInButton";

export const MobileHeader = ({ activeIndex, setActiveIndex }: HeaderProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box>
      <AppBar
        elevation={4}
        sx={{
          backgroundColor: colors.blue100,
        }}
        position="relative"
      >
        <Toolbar
          sx={{
            zIndex: 1201,
            height: 80,
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={() => setDrawerOpen(!isDrawerOpen)}>
            {isDrawerOpen ? <CloseIcon /> : <HamburgerIcon />}
          </IconButton>
          <img
            style={{
              height: 40,
              width: 110,
            }}
            src="./logo.png"
          />
          <LogInButton />
          <Drawer
            PaperProps={{
              sx: {
                top: "80px",
                padding: "0 16px",
                backgroundColor: colors.blue100,
                width: "75%",
                height: "calc(100% - 80px)",
                boxShadow: "4px 0px 3px rgba(23, 34, 39, 0.25)",
                overflowY: "auto",
              },
            }}
            hideBackdrop
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <List sx={{ padding: "0" }} component="nav">
              {navItems.map((item, index: number) => {
                const isActive = activeIndex === index;
                return (
                  <>
                    {index > 0 && (
                      <Divider sx={{ background: colors.white20 }} />
                    )}
                    <NavItem
                      label={item}
                      variant="mobile"
                      onClick={() => setActiveIndex(index)}
                      isActive={isActive}
                    />
                  </>
                );
              })}
              <Divider sx={{ background: colors.white20 }} />
              <CurrencyAccordion />
              <Divider sx={{ background: colors.white20 }} />
              <ListItem sx={{ padding: "16px 0px" }}>
                <ButtonBase
                  sx={{
                    border: "1px solid #fff",
                    padding: "6px 12px",
                    filter: "drop-shadow(1px 2px 5px rgba(0, 0, 0, 0.15))",
                    borderRadius: "4px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "21px",
                    color: "white",
                    marginRight: "16px",
                  }}
                >
                  Sign Up
                </ButtonBase>
                <LogInButton />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

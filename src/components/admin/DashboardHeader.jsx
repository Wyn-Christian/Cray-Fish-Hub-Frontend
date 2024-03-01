"use client";
import { useState } from "react";

import { AppBar, Box, Drawer, IconButton, Stack, Toolbar } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import navbarsize from "@/constants/navbarsize";
import AvatarMenu from "./AvatarMenu";
import DashboardMobileNavBar from "./DashboardMobileNavbar";

const DashboardHeader = ({ user }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        boxShadow: "none",
        height: 80,
        zIndex: 1101,
        backdropFilter: "blur(6px)",
        transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        width: { lg: `calc(100% - ${navbarsize.sidebar + 1}px)` },
      }}
    >
      <Toolbar sx={{ height: "100%" }}>
        <Stack
          direction="row"
          flexGrow={1}
          alignItems="center"
          justifyContent="flex-end"
          gap={{ xs: 0.5, sm: 1 }}
        >
          <Box sx={{ display: { xs: "block", lg: "none" }, flexGrow: 1 }}>
            <IconButton onClick={() => toggleDrawer(true)}>
              <MenuIcon color="primary" />
            </IconButton>
          </Box>

          <AvatarMenu user={user} />
        </Stack>
      </Toolbar>

      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <DashboardMobileNavBar toggleDrawer={toggleDrawer} />
      </Drawer>
    </AppBar>
  );
};

export default DashboardHeader;

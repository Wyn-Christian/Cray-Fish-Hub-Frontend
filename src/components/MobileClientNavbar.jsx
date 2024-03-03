"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "@/actions/auth";

const client_pages = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Articles",
    route: "/articles",
  },
  {
    title: "Resources",
    route: "/resources",
  },
  {
    title: "Forums",
    route: "/forums",
  },
  // {
  //   title: "Analysis",
  //   route: "/analysis",
  // },
];

const Nav = ({ title, route, toggleDrawer }) => {
  const pathname = usePathname();
  let isActive = pathname == route;
  return (
    <Box>
      <Button
        LinkComponent={Link}
        href={route}
        sx={{
          color: isActive ? "primary.main" : "unset",
          bgcolor: isActive ? "#FD874C1a" : "transparent",
          textDecoration: "none",
          textTransform: "unset",
          justifyContent: "flex-start",
          fontWeight: 400,
          borderRadius: "5px",
          p: isActive ? "12px" : "12px 0",
        }}
        size="large"
        fullWidth
        onClick={toggleDrawer(false)}
      >
        {title}
      </Button>
    </Box>
  );
};

const MobileClientNavbar = ({ isLogin }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  return (
    <Box
      // flexGrow={1}
      pr={1}
      textAlign="right"
      sx={{ display: { xs: "inline-block", md: "none", color: "#000" } }}
    >
      <Button
        variant="outlined"
        sx={{ p: 1, fontWeight: 400, minWidth: "auto" }}
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </Button>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: 280,
          },
        }}
      >
        <Box p={1} height="100%">
          <Stack
            width="100%"
            p="8px 16px"
            direction="row"
            alignItems="center"
            gap={1}
          >
            <Image
              src="/assets/logo-2.svg"
              alt="Navbar Logo"
              width={45}
              height={45}
            />
            <Typography variant="h5" letterSpacing={0.01}>
              Cray Fish Hub
            </Typography>
          </Stack>

          <Box p={2}>
            {client_pages.map((page) => (
              <Nav key={page.title} {...page} toggleDrawer={toggleDrawer} />
            ))}
          </Box>
          <Divider />

          {!isLogin ? (
            <Stack mt={1} gap={1}>
              <Button
                LinkComponent={Link}
                href="/login"
                fullWidth
                variant="contained"
                onClick={toggleDrawer(false)}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                href="/sign-up"
                fullWidth
                variant="outlined"
                onClick={toggleDrawer(false)}
              >
                Sign Up
              </Button>
            </Stack>
          ) : (
            <Button
              sx={{ mt: 2 }}
              LinkComponent={Link}
              href="/"
              fullWidth
              variant="contained"
              onClick={() => {
                toggleDrawer(false)();
                logout();
              }}
            >
              Log out
            </Button>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileClientNavbar;

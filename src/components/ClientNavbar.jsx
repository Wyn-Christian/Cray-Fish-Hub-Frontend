"use client";
import {
  Container,
  AppBar,
  Box,
  Button,
  Toolbar,
  useScrollTrigger,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import MobileClientNavbar from "./MobileClientNavbar";
import ProfileMenu from "./ProfileMenu";

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
  // {
  //   title: "Profile",
  //   route: "/profile/123",
  // },
];

const auth_pages = [
  {
    title: "Login",
    route: "/login",
  },
  {
    title: "Sign Up",
    route: "/sign-up",
  },
];

const ClientNavBar = ({ isLogin, user }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: trigger || "unset",
        py: trigger ? 0 : 2,
        transition: "padding 0.23s ease",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <MobileClientNavbar isLogin={isLogin} />

          <Stack direction="row" alignItems="center" gap={1}>
            <Image
              src="/assets/logo-2.svg"
              alt="Navbar Logo"
              width={45}
              height={45}
            />
            <Typography
              variant="h5"
              letterSpacing={0.01}
              display={["none", "block"]}
            >
              Cray Fish Hub
            </Typography>
          </Stack>

          <Stack
            sx={{ flexGrow: 1 }}
            justifyContent="center"
            gap={3}
            direction="row"
            display={{ xs: "none", md: "flex" }}
          >
            {client_pages.map((page) => {
              return (
                <Button
                  key={page.title}
                  LinkComponent={Link}
                  href={page.route}
                  sx={{ my: 2, color: "#000" }}
                  disableRipple
                >
                  {page.title}
                </Button>
              );
            })}
          </Stack>

          {!isLogin ? (
            <Box display={{ xs: "none", md: "inline-block" }}>
              <Button
                LinkComponent={Link}
                href="/login"
                sx={{ my: 2, color: "#000" }}
                disableRipple
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                href="/sign-up"
                variant="contained"
                sx={{
                  my: 2,
                  color: "#fff",
                  bgcolor: "#000",
                  borderRadius: 6,
                  pr: 1,
                }}
                disableRipple
                endIcon={
                  <ArrowOutwardRoundedIcon
                    sx={{
                      bgcolor: "primary.main",
                      borderRadius: "100%",
                      fontSize: 3,
                      height: 30,
                      width: 30,
                    }}
                  />
                }
              >
                Sign Up
              </Button>
            </Box>
          ) : (
            <Stack
              direction="row"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ProfileMenu user={user} />
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ClientNavBar;

import Link from "next/link";
import Image from "next/image";

import { Box, Stack, Typography, Link as MuiLink } from "@mui/material";

import navbarsize from "@/constants/navbarsize";
import MenuNav from "./nav/MenuNav";
import navLinks from "@/constants/navLinks";

const DashboardMobileNavBar = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{
        overflow: "auto",
        height: "100%",
        width: navbarsize.sidebar,
        pb: 20,
      }}
    >
      <MuiLink
        variant="inherit"
        component={Link}
        href="/admin"
        onClick={() => toggleDrawer(false)}
        sx={{
          m: 0,
          font: "inherit",
          textDecoration: "none",
          display: "contents",
          color: "inherit",
        }}
      >
        <Box
          sx={{
            height: 40,
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 3,
            ml: 4,
            mb: 1,
          }}
        >
          <Image
            style={{
              height: "100%",
            }}
            src="/assets/logo-2.svg"
            alt="Navbar Logo"
            width={45}
            height={45}
          />
          <Typography color="inherit" fontWeight={700}>
            Cray Fish Hub
          </Typography>
        </Box>
      </MuiLink>

      {navLinks.map((nav, i) => (
        <MenuNav {...nav} key={i} toggleDrawer={toggleDrawer} />
      ))}
    </Box>
  );
};

export default DashboardMobileNavBar;

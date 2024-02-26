import Link from "next/link";

import {
  Box,
  Typography,
  Link as MuiLink,
  ListItemButton,
} from "@mui/material";

const MenuItemNav = ({ title, route, icon, isActive, toggleDrawer }) => {
  return (
    <MuiLink
      component={Link}
      onClick={() => (toggleDrawer ? toggleDrawer(false) : "")}
      href={route}
      underline="none"
      variant="inherit"
      sx={{
        m: 0,
        font: "inherit",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <ListItemButton
        disableGutters
        sx={{
          borderRadius: 1,
          p: "4px 8px 4px 12px",
          minHeight: 44,
          color: isActive ? "primary.main" : "#ab9e91",
          backgroundColor: isActive ? "#d2a31914" : "unset",
        }}
      >
        <Box
          component="span"
          sx={{ width: 24, height: 24, flexShrink: 0, mr: 2 }}
        >
          {icon}
        </Box>
        <Box component="span" sx={{ flex: "1 1 auto", minWidth: 0 }}>
          <Typography
            sx={{
              width: "100%",
              maxWidth: "100%",
              display: "block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              lineHeight: 1.6,
              fontSize: "0.875rem",
              fontWeight: isActive ? 600 : 500,
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
        </Box>
      </ListItemButton>
    </MuiLink>
  );
};

export default MenuItemNav;

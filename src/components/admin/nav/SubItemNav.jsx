import Link from "next/link";

import {
  Box,
  Typography,
  Link as MuiLink,
  ListItemButton,
} from "@mui/material";

const SubItemNav = ({ title, route, isActive = true, toggleDrawer }) => {
  return (
    <MuiLink
      component={Link}
      href={route}
      underline="none"
      color="inherit"
      onClick={() => (toggleDrawer ? toggleDrawer(false) : "")}
    >
      <ListItemButton
        disableGutters
        sx={{
          p: "4px 8px 4px 12px",
          borderRadius: 2,
          minHeight: 36,
          color: isActive ? "primary.main" : "#777",
        }}
      >
        <Box
          component="span"
          sx={{
            width: 24,
            height: 24,
            flexShrink: 0,
            mr: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::before": {
              content: `""`,
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: isActive ? "primary.main" : "#777",
              transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              transform: isActive ? "scale(2)" : "unset",
            },
          }}
        />

        <Box sx={{ flex: "1 1 auto", minWidth: 0 }}>
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
              textTransform: "capitalize",
              fontWeight: isActive ? 600 : 500,
            }}
          >
            {title}
          </Typography>
        </Box>
      </ListItemButton>
    </MuiLink>
  );
};

export default SubItemNav;

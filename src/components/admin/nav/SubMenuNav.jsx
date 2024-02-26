"use client";

import { useState } from "react";

import { Box, Collapse, ListItemButton } from "@mui/material";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import SubItemNav from "./SubItemNav";

const SubMenuNav = ({ title, items, icon, pathname, toggleDrawer }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  let isActive = items.some((item) => item.route == pathname);

  return (
    <Box>
      <ListItemButton
        sx={{
          borderRadius: 1,
          color: isActive ? "primary.main" : "#ab9e91",
          backgroundColor: isActive ? "#d2a31914" : "unset",
          p: "4px 8px 4px 12px",
          minHeight: 44,
        }}
        onClick={handleClick}
      >
        <Box
          component="span"
          sx={{ width: 24, height: 24, flexShrink: 0, mr: 2 }}
        >
          {icon}
        </Box>
        <Box component="span" sx={{ flex: "1 1 auto", minWidth: 0 }}>
          <Box
            component="span"
            sx={{
              width: "100%",
              maxWidth: "100%",
              display: "block",
              overflow: "hideen",
              textOverflow: "ellipsis",
              lineHeight: 1.57,
              fontSize: "0.875rem",
              fontWeight: isActive ? 600 : 500,
              textTransform: "capitalize",
            }}
          >
            {title}
          </Box>
        </Box>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open}>
        {items.map((item, i) => (
          <SubItemNav
            {...item}
            isActive={item.route == pathname}
            key={i}
            toggleDrawer={toggleDrawer}
          />
        ))}
      </Collapse>
    </Box>
  );
};
export default SubMenuNav;

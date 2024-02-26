"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { Collapse, ListSubheader, Stack } from "@mui/material";

import MenuItemNav from "./MenuItemNav";
import SubMenuNav from "./SubMenuNav";

const MenuNav = ({ title, items, Icon, toggleDrawer }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack component="nav" px={2}>
      <ListSubheader
        onClick={handleClick}
        disableSticky
        disableGutters
        sx={{
          fontSize: "0.75rem",
          cursor: "pointer",
          fontWeight: 700,
          lineHeight: 1.5,
          textTransform: "uppercase",
          display: "inline-flex",
          color: "#ab9e91",
          mb: 0.5,
          p: "16px 8px 8px 12px",
          transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

          "&:hover": {
            color: "#362b21",
          },
        }}
      >
        {title}
      </ListSubheader>

      <Collapse in={open}>
        {items.map((item, i) => {
          return item.route ? (
            <MenuItemNav
              {...item}
              toggleDrawer={toggleDrawer}
              isActive={item.route == pathname}
              key={i}
            />
          ) : (
            <SubMenuNav
              {...item}
              toggleDrawer={toggleDrawer}
              pathname={pathname}
              key={i}
            />
          );
        })}
      </Collapse>
    </Stack>
  );
};

export default MenuNav;

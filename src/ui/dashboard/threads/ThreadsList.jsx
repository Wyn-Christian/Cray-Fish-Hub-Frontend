"use client";

import { useState } from "react";

import {
  Avatar,
  Box,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import Link from "next/link";

const ProfileLink = ({ href, src, name, date }) => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        pt: 1.5,
        color: "#212b36",
        textDecoration: "none",
        "&:hover": {
          "& .MuiListItemText-primary": { textDecoration: "underline" },
        },
      }}
      component={Link}
      href={href}
    >
      <Avatar src={src} alt={name} sx={{ mr: 1 }} />
      <ListItemText
        primary={name}
        secondary={date}
        secondaryTypographyProps={{
          sx: {
            lineHeight: 1.5,
            fontWeight: 400,
            color: "#919eab",
            fontSize: "0.75rem",
          },
        }}
      />
    </Stack>
  );
};

const ThreadPaper = ({ author, title, date_created }) => {
  return (
    <Stack
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        "&:hover": {
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
      }}
    >
      <Stack gap={1} p={3} bgcolor="#fee9d1">
        <Stack
          component={Link}
          href="/admin/forums/details/123"
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              "& .MuiTypography-h6": {
                textDecoration: "underline",
              },
            },
          }}
        >
          <Typography variant="h6">Thread Sample Title</Typography>
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            Category
          </Typography>
        </Stack>

        <ProfileLink
          href="/admin/users/profile/123"
          src="/assets/profile/pic-1.jpg"
          name="Thread Author"
          date="Feb 12, 2024"
        />
      </Stack>
    </Stack>
  );
};

const ThreadsList = () => {
  const [category, setCategory] = useState("all");
  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };
  return (
    <Box>
      <Tabs
        value={category}
        onChange={handleCategoryChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            minHeight: 48,
            minWidth: 48,
            fontWeight: 600,
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="General" value="general" />
        <Tab label="Q&A" value="q&a" />
        <Tab label="Case Study" value="case study" />
      </Tabs>

      <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
        <ThreadPaper />
        <ThreadPaper />
        <ThreadPaper />
      </Masonry>
    </Box>
  );
};

export default ThreadsList;

"use client";

import moment from "moment";
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
        primaryTypographyProps={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
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

const ThreadPaper = ({ _id, author, title, category, createdAt }) => {
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
          href={`/admin/forums/details/${_id}`}
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
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            {category}
          </Typography>
        </Stack>

        <ProfileLink
          href={`/admin/users/profile/${author?._id}`}
          src={author?.name}
          name={author?.name}
          date={moment(createdAt).format("MMM DD, YYYY")}
        />
      </Stack>
    </Stack>
  );
};

const ThreadsList = ({ threads }) => {
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
        <Tab label="General" value="General" />
        <Tab label="Q&A" value="Q&A" />
        <Tab label="Case Study" value="Case Study" />
      </Tabs>

      <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
        {threads
          .filter((a) => {
            return category !== "all" ? a.category === category : true;
          })
          .map((thread) => (
            <ThreadPaper key={thread._id} {...thread} />
          ))}
      </Masonry>
    </Box>
  );
};

export default ThreadsList;

"use client";
import { useState } from "react";

import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TabPanel from "./TabPanel";
import TabHeader from "./TabHeader";
import Link from "next/link";
import CreateThreadForm from "../user/CreateThreadForm";
import { Masonry } from "@mui/lab";
import moment from "moment";

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
        <Box
          sx={{
            lineHeight: 1.5,
            fontWeight: 400,
            color: "#919eab",
            fontSize: "0.75rem",
          }}
        >
          {moment(createdAt).format("MMM DD, YYYY")}
        </Box>

        <Stack
          component={Link}
          href={`/forums/thread/${_id}`}
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Typography
            variant="h6"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            {category}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

const ThreadsTab = ({ value, index, user, threads }) => {
  const [categoryTab, setCategoryTab] = useState("all");
  const handleCategoryTabChange = (event, newValue) => {
    setCategoryTab(newValue);
  };

  return (
    <TabPanel value={value} index={index}>
      <CreateThreadForm {...user} />

      <TabHeader title="My Threads" />

      <Tabs
        value={categoryTab}
        onChange={handleCategoryTabChange}
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
            return categoryTab !== "all" ? a.category === categoryTab : true;
          })
          .map((thread) => (
            <ThreadPaper key={thread._id} {...thread} />
          ))}
      </Masonry>
    </TabPanel>
  );
};

export default ThreadsTab;

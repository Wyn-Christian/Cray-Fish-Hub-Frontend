"use client";
import Link from "next/link";
import { useState } from "react";

import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ProfileLink from "@/components/ProfileLink";
import ArticleStatus from "@/components/admin/ArticleStatus";
import moment from "moment";

const ArticlePaper = ({ _id, title, content, status, author, createdAt }) => {
  return (
    <Grid xs={12} md={6} lg={4}>
      <Stack
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          height: "100%",
          "&:hover": {
            boxShadow:
              "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
          },
        }}
      >
        <Stack
          gap={1}
          p={3}
          bgcolor="#fee9d1"
          height="100%"
          justifyContent="space-between"
        >
          <Box width={30}>
            <ArticleStatus value={status} />
          </Box>
          <Stack gap={0.5}>
            <Box
              component={Link}
              href={`/admin/articles/details/${_id}`}
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Typography variant="h5">{title}</Typography>
            </Box>
            {/* 
            <Typography
              component={ReactMarkdown}
              rehypePlugins={[rehypeHighlight]}
              variant="body2"
              color="#637381"
              fontWeight={400}
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
                {htmlToMarkdown(content)}
    
            </Typography> */}
          </Stack>

          <ProfileLink
            href={`/admin/users/profile/${author?._id}`}
            src={author?.name}
            name={author?.name}
            date={moment(createdAt).fromNow()}
          />
        </Stack>
      </Stack>
    </Grid>
  );
};

const ArticleList = ({ articles }) => {
  const [statusTab, setStatusTab] = useState("all");
  const handleStatusTabChange = (event, newValue) => {
    setStatusTab(newValue);
  };
  return (
    <Box>
      <Tabs
        value={statusTab}
        onChange={handleStatusTabChange}
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
        {/* <Tab label="Not Started" value="Not Started" /> */}
        <Tab label="In Draft" value="In Draft" />
        <Tab label="Published" value="Published" />
      </Tabs>

      <Grid container spacing={2}>
        {articles
          .filter((a) => {
            return statusTab !== "all" ? a.status === statusTab : true;
          })
          .map((article) => (
            <ArticlePaper key={article._id} {...article} />
          ))}
      </Grid>
    </Box>
  );
};

export default ArticleList;

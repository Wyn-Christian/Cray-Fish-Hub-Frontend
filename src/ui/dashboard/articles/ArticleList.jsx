"use client";
import Link from "next/link";
import { useState } from "react";

import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ProfileLink from "@/components/ProfileLink";
import ArticleStatus from "@/components/admin/ArticleStatus";

const ArticlePaper = ({ title, content, authorId }) => {
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
            <ArticleStatus value="draft" />
          </Box>
          <Stack gap={0.5}>
            <Box
              component={Link}
              href="/admin/articles/details/123"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Typography variant="h5">{title}</Typography>
            </Box>

            <Typography
              variant="body2"
              color="#637381"
              fontWeight={400}
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 3, // Number of lines to show
                WebkitBoxOrient: "vertical",
              }}
            >
              {content}
            </Typography>
          </Stack>

          <ProfileLink
            href="/admin/users/profile/123"
            src="/assets/profile/pic-1.jpg"
            name="Article Author"
            date="Feb 23, 2024"
          />
        </Stack>
      </Stack>
    </Grid>
  );
};

const ArticleList = () => {
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
        <Tab label="Draft" value="draft" />
        <Tab label="Published" value="published" />
      </Tabs>

      <Grid container spacing={2}>
        <ArticlePaper
          title="sample 1"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores repellendus non accusantium impedit similique, nisi voluptas adipisci, iste iusto cumque quaerat doloremque ipsum vero ea, dolorum temporibus illo sed commodi."
        />
        <ArticlePaper
          title="sample 1"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores repellendus non accusantium impedit similique, "
        />
        <ArticlePaper
          title="sample 1"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </Grid>
    </Box>
  );
};

export default ArticleList;

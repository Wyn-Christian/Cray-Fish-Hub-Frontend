"use client";

import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ArticlePaper from "@/components/ArticlePaper";
import SearchField from "@/components/admin/SearchField";

const HomeArticleList = ({ articles }) => {
  return (
    <Box>
      <Stack mb={3}>
        <SearchField />
      </Stack>

      <Grid container spacing={2}>
        {articles.map((article) => (
          <ArticlePaper key={article._id} {...article} />
        ))}
      </Grid>
    </Box>
  );
};

export default HomeArticleList;

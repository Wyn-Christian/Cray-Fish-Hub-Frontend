"use client";

import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ArticlePaper from "@/components/ArticlePaper";

const HomeArticleList = ({ articles }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {articles.map((article) => (
          <ArticlePaper key={article._id} {...article} />
        ))}
      </Grid>
    </Box>
  );
};

export default HomeArticleList;

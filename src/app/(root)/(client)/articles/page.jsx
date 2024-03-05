import { Box, Container, Stack, Typography } from "@mui/material";

import Header from "@/components/Header";
import HomeArticleList from "@/ui/client/articles/ArticleList";

import { getAllPublishedArticles } from "@/actions/users/articles";

const ArticlesPage = async ({ searchParams }) => {
  const result = await getAllPublishedArticles(searchParams);

  return (
    <Box>
      <Header title="Articles" />

      <Container sx={{ mt: 3 }}>
        <HomeArticleList articles={result.data} />
      </Container>
    </Box>
  );
};
export default ArticlesPage;

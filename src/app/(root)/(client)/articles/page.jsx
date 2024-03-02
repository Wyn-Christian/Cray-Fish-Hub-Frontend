import { Box, Container, Stack, Typography } from "@mui/material";

import Header from "@/components/Header";
import HomeArticleList from "@/ui/client/articles/ArticleList";

import { getAllArticles } from "@/actions/admin/articles";
import { getAllPublishedArticles } from "@/actions/users/articles";

const ArticlesPage = async () => {
  const result = await getAllPublishedArticles();

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

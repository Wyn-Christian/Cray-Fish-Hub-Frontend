import Link from "next/link";

import { Box, Button, Container, Stack } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";

import ArticleStatus from "@/components/admin/ArticleStatus";
import ArticleDetails from "@/ui/dashboard/articles/ArticleDetails";
import { getArticleComments, getArticleDetail } from "@/actions/admin/articles";

const ArticleNav = ({ id, status }) => {
  return (
    <Box mb={{ xs: 3, md: 5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          disableRipple
          startIcon={<ArrowBackIosIcon />}
          size="large"
          LinkComponent={Link}
          href="/admin/articles/list"
        >
          Back
        </Button>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArticleStatus value={status} />
          <Button
            startIcon={<EditIcon />}
            size="small"
            variant="contained"
            LinkComponent={Link}
            href={`/admin/articles/edit/${id}`}
          >
            Edit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const ArticleDetailsPage = async ({ params }) => {
  let article = await getArticleDetail(params.id);
  let comments = await getArticleComments(params.id);

  return (
    <Container sx={{ px: [0, 2] }}>
      <ArticleNav id={params.id} status={article?.status} />

      <ArticleDetails {...article} comments={comments} />
    </Container>
  );
};

export default ArticleDetailsPage;

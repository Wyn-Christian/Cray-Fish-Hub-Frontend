import Link from "next/link";

import { Box, Button, Container, Stack } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";

import ArticleStatus from "@/components/admin/ArticleStatus";
import ArticleDetails from "@/ui/dashboard/articles/ArticleDetails";

const ArticleNav = () => {
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
          <ArticleStatus value="published" />
          <Button
            startIcon={<EditIcon />}
            size="small"
            variant="contained"
            LinkComponent={Link}
            href="/admin/articles/edit/123"
          >
            Edit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const ArticleDetailsPage = () => {
  return (
    <Container sx={{ px: [0, 2] }}>
      <ArticleNav />

      <ArticleDetails />
    </Container>
  );
};

export default ArticleDetailsPage;

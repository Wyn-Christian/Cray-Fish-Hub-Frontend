import Link from "next/link";

import { Box, Button, Container, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ThreadsDetails from "@/ui/dashboard/threads/ThreadsDetails";
import { getAllPostsByThreads, getThreadDetails } from "@/actions/admin/forums";

const ForumDetailsPage = async ({ params }) => {
  const { author, ...thread } = await getThreadDetails(params.id);
  const posts = await getAllPostsByThreads(params.id);

  return (
    <Container sx={{ p: [0, 2] }}>
      <Box mb={{ xs: 3, md: 5 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            disableRipple
            startIcon={<ArrowBackIosIcon />}
            size="large"
            LinkComponent={Link}
            href="/admin/forums/list"
          >
            Back
          </Button>
        </Stack>
      </Box>

      <ThreadsDetails thread={thread} author={author} posts={posts} />
    </Container>
  );
};

export default ForumDetailsPage;

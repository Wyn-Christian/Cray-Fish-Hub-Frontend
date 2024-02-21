import CreateForumPost from "@/components/CreateForumPost";
import ThreadPost from "@/components/ThreadPost";
import {
  Avatar,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const ThreadHeader = () => (
  <Box
    sx={{
      position: "relative",
      backgroundImage: "linear-gradient(7deg, #ffffff 20%, #fd874c 100%);",
      pt: 14,
      mt: -14,
      width: "100%",
    }}
  >
    <Container
      sx={{
        width: "100%",
        m: "0 auto",
        px: 2,
        py: {
          xs: 4,
          sm: 6,
          md: 8,
        },
        maxWidth: {
          sm: 720,
          md: 1236,
        },
      }}
    >
      <Typography variant="h3" mb={2} fontWeight={700} textAlign="center">
        Thread Category
      </Typography>
    </Container>
  </Box>
);

const ThreadDetail = () => {
  return (
    <Paper sx={{ p: 2 }} elevation={0}>
      <Stack gap={2}>
        <Typography variant="h3">Thread Title</Typography>

        <Stack direction="row" gap={2} alignItems="center">
          <Avatar
            src="/assets/profile/pic-5.jpg"
            sx={{ width: 50, height: 50 }}
          />
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="subtitle1">Thread Author</Typography>

            <Box width={4} height={4} borderRadius="50%" bgcolor="#333" />

            <Typography variant="caption" color="#888">
              May 19, 2024
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

const ThreadPostsPage = () => {
  return (
    <Box>
      <ThreadHeader />

      <Container maxWidth="md" sx={{ mt: 3 }}>
        <ThreadDetail />

        <CreateForumPost />

        <Stack gap={1}>
          <ThreadPost />
          <ThreadPost />
          <ThreadPost />
        </Stack>
      </Container>
    </Box>
  );
};

export default ThreadPostsPage;

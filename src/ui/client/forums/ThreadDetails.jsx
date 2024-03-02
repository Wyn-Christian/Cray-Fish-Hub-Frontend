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
import moment from "moment";

const ThreadHeader = ({ category }) => (
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
        {category}
      </Typography>
    </Container>
  </Box>
);

const ThreadDetail = ({ title, createdAt, author }) => {
  return (
    <Paper sx={{ p: 2 }} elevation={0}>
      <Stack gap={2}>
        <Typography variant="h3">{title}</Typography>

        <Stack direction="row" gap={2} alignItems="center">
          <Avatar
            src={author?.name}
            alt={author?.name}
            sx={{ width: 50, height: 50 }}
          />
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography variant="subtitle1">{author?.name}</Typography>

            <Box width={4} height={4} borderRadius="50%" bgcolor="#333" />

            <Typography variant="caption" color="#888">
              {moment(createdAt).format("MMM DD, YYYY")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

const ThreadDetails = ({ thread, author, posts, user }) => {
  return (
    <Box>
      <ThreadHeader {...thread} />

      <Container maxWidth="md" sx={{ mt: 3 }}>
        <ThreadDetail {...thread} author={author} />

        <CreateForumPost threadId={thread._id} user={user} />

        <Stack gap={1}>
          {posts.map((post) => (
            <ThreadPost key={post._id} {...post} user={user} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ThreadDetails;

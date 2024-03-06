import moment from "moment";

import {
  Stack,
  Container,
  Paper,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

import CreateForumPost from "@/components/CreateForumPost";
import ThreadPost from "@/components/ThreadPost";

const ThreadDetail = ({ thread, author }) => {
  return (
    <Paper sx={{ pb: 2, px: [0, 2] }} elevation={0}>
      <Stack gap={2}>
        <Typography variant="h3">{thread?.title}</Typography>

        <Stack direction="row" gap={2} alignItems="center">
          <Avatar
            alt={author?.name}
            src={author?.profilePath || "/assets/profile/img-1.png"}
            sx={{ width: 50, height: 50 }}
          />
          <Stack
            direction={["column", "row"]}
            alignItems={{ sm: "center" }}
            gap={[0, 1]}
          >
            <Typography variant="subtitle1">{author?.name}</Typography>

            <Box
              width={4}
              height={4}
              borderRadius="50%"
              bgcolor="#333"
              display={["none", "block"]}
            />

            <Typography variant="caption" color="#888">
              {moment(thread?.createdAt).format("MMM DD, YYYY")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

const ThreadsDetails = ({ thread, author, posts, user }) => {
  return (
    <Container maxWidth="md" disableGutters>
      <ThreadDetail thread={thread} author={author} />

      <CreateForumPost threadId={thread?._id} author={author} user={user} />

      <Stack gap={1}>
        {posts.map((post) => {
          return <ThreadPost key={post._id} {...post} user={user} />;
        })}
      </Stack>
    </Container>
  );
};

export default ThreadsDetails;

import { getCurrentUser } from "@/actions/admin/account";
import { getAllCommentsByPost } from "@/actions/admin/forums";
import CreateForumPost from "@/components/CreateForumPost";
import ThreadPost from "@/components/ThreadPost";
import {
  Stack,
  Container,
  Paper,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import moment from "moment";

const ThreadDetail = ({ thread, author }) => {
  return (
    <Paper sx={{ pb: 2, px: [0, 2] }} elevation={0}>
      <Stack gap={2}>
        <Typography variant="h3">{thread?.title}</Typography>

        <Stack direction="row" gap={2} alignItems="center">
          <Avatar
            src={author?.name}
            alt={author?.name}
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

const ThreadsDetails = async ({ thread, author, posts }) => {
  const user = await getCurrentUser();
  return (
    <Container maxWidth="md" disableGutters>
      <ThreadDetail thread={thread} author={author} />

      <CreateForumPost threadId={thread?._id} author={author} user={user} />

      <Stack gap={1}>
        {posts.map(async (post) => {
          let comments = await getAllCommentsByPost(post._id);
          return (
            <ThreadPost
              key={post._id}
              {...post}
              user={user}
              comments={comments}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default ThreadsDetails;

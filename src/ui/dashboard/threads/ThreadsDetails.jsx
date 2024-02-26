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

const ThreadDetail = () => {
  return (
    <Paper sx={{ pb: 2, px: [0, 2] }} elevation={0}>
      <Stack gap={2}>
        <Typography variant="h3">Thread Title</Typography>

        <Stack direction="row" gap={2} alignItems="center">
          <Avatar
            src="/assets/profile/pic-5.jpg"
            sx={{ width: 50, height: 50 }}
          />
          <Stack
            direction={["column", "row"]}
            alignItems={{ sm: "center" }}
            gap={[0, 1]}
          >
            <Typography variant="subtitle1">Thread Author</Typography>

            <Box
              width={4}
              height={4}
              borderRadius="50%"
              bgcolor="#333"
              display={["none", "block"]}
            />

            <Typography variant="caption" color="#888">
              May 19, 2024
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

const ThreadsDetails = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <ThreadDetail />

      <CreateForumPost />

      <Stack gap={1}>
        <ThreadPost />
        <ThreadPost />
        <ThreadPost />
      </Stack>
    </Container>
  );
};

export default ThreadsDetails;

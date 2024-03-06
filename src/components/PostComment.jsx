import moment from "moment";

import {
  Avatar,
  Box,
  Divider,
  Fade,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const PostComment = ({ content, createdAt, author }) => {
  return (
    <Fade in>
      <Paper sx={{ pt: 1, height: "100%" }} elevation={0}>
        <Stack gap={1} direction="row">
          <Stack alignItems="center" gap={0.5}>
            <Avatar
              alt={author?.name}
              src={author?.profilePath || "/assets/profile/img-1.png"}
              sx={{ width: 50, height: 50 }}
            />
            <Box height="100%">
              <Divider orientation="vertical" />
            </Box>
          </Stack>

          <Stack>
            <Stack>
              <Stack
                direction={["column", "row"]}
                alignItems={{ sm: "center" }}
                gap={[0, 1]}
              >
                <Typography variant="subtitle2">{author?.name}</Typography>

                <Box
                  width={4}
                  height={4}
                  borderRadius="50%"
                  bgcolor="#333"
                  display={["none", "block"]}
                />

                <Typography variant="caption" color="#888">
                  {moment(createdAt).fromNow()}
                </Typography>
              </Stack>
            </Stack>

            <Typography variant="body1">{content}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Fade>
  );
};

export default PostComment;

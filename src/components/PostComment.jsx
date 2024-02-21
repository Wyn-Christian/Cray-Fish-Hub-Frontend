import {
  Avatar,
  Box,
  Divider,
  Fade,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const PostComment = () => {
  return (
    <Fade in>
      <Paper sx={{ pt: 1, height: "100%" }} elevation={0}>
        <Stack gap={1} direction="row">
          <Stack alignItems="center" gap={0.5}>
            <Avatar
              alt="user profile"
              src="/assets/profile/pic-4.jpg"
              sx={{ width: 50, height: 50 }}
            />
            <Box height="100%">
              <Divider orientation="vertical" />
            </Box>
          </Stack>

          <Stack>
            <Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography variant="subtitle2">Comment Author</Typography>

                <Box width={4} height={4} borderRadius="50%" bgcolor="#333" />

                <Typography variant="caption" color="#888">
                  May 19, 2024
                </Typography>
              </Stack>
            </Stack>

            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quasi blanditiis cumque dolorum excepturi ratione
              doloremque, amet ea quae, modi soluta veniam veritatis laborum at
              debitis quod dicta asperiores laudantium.
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Fade>
  );
};

export default PostComment;

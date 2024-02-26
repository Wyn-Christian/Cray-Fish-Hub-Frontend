"use client";
import { useState } from "react";
import CreateComment from "./CreateComment";
import PostComment from "./PostComment";

const {
  Paper,
  Stack,
  Avatar,
  Box,
  Divider,
  Typography,
  Button,
} = require("@mui/material");

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const ThreadPost = () => {
  const [openReply, setOpenReply] = useState(false);
  const [showComments, setShowComments] = useState(false);
  return (
    <Paper sx={{ px: [0, 2], pt: 1, height: "100%" }} elevation={0}>
      <Stack gap={1} direction="row">
        <Stack alignItems="center" gap={0.5}>
          <Avatar
            alt="user profile"
            src="/assets/profile/pic-2.jpg"
            sx={{ width: 50, height: 50 }}
          />
          <Box height="100%">
            <Divider orientation="vertical" />
          </Box>
        </Stack>

        <Stack>
          <Stack>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="subtitle2">Post Author</Typography>

              <Box width={4} height={4} borderRadius="50%" bgcolor="#333" />

              <Typography variant="caption" color="#888">
                May 19, 2024
              </Typography>
            </Stack>
          </Stack>

          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            dolorem dolore accusantium, vel, quaerat harum, et eum nisi officia
            natus blanditiis illum porro dolor? Consequuntur itaque doloremque
            illum a architecto.
          </Typography>
          <Box>
            <Button disableRipple onClick={() => setOpenReply(!openReply)}>
              Reply
            </Button>
            <Button
              disableRipple
              endIcon={
                showComments ? (
                  <ChatBubbleIcon />
                ) : (
                  <ChatBubbleOutlineOutlinedIcon />
                )
              }
              onClick={() => setShowComments(!showComments)}
            >
              23
            </Button>
          </Box>

          <Stack>
            {openReply && <CreateComment />}
            {showComments && <PostComment />}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ThreadPost;

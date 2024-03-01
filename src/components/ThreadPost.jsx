"use client";
import { useState } from "react";
import moment from "moment";

const {
  Paper,
  Stack,
  Avatar,
  Box,
  Divider,
  Typography,
  Button,
} = require("@mui/material");

import CreateComment from "./CreateComment";
import PostComment from "./PostComment";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const ThreadPost = ({ _id, content, author, createdAt, user, comments }) => {
  const [openReply, setOpenReply] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <Paper sx={{ px: [0, 2], pt: 1, height: "100%" }} elevation={0}>
      <Stack gap={1} direction="row">
        <Stack alignItems="center" gap={0.5}>
          <Avatar
            alt={author?.name}
            src={author?.name}
            sx={{ width: 50, height: 50 }}
          />
          <Box height="100%">
            <Divider orientation="vertical" />
          </Box>
        </Stack>

        <Stack flexGrow={1}>
          <Stack>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="subtitle2">{author?.name}</Typography>

              <Box width={4} height={4} borderRadius="50%" bgcolor="#333" />

              <Typography variant="caption" color="#888">
                {moment(createdAt).fromNow()}
              </Typography>
            </Stack>
          </Stack>

          <Typography variant="body1">{content}</Typography>
          <Box>
            <Button disableRipple onClick={() => setOpenReply(!openReply)}>
              Reply
            </Button>
            {!!comments.length && (
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
                {comments.length}
              </Button>
            )}
          </Box>

          <Stack>
            {openReply && <CreateComment postId={_id} user={user} />}
            {showComments &&
              comments.map((comment) => (
                <PostComment key={comment._id} {...comment} postId={_id} />
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ThreadPost;

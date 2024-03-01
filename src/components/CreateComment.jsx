"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

import { Avatar, Button, Fade, Paper, Stack, TextField } from "@mui/material";
import SubmitBtn from "./SubmitBtn";
import { createPostComment } from "@/actions/admin/forums";

const CreateComment = ({ postId, user }) => {
  const [state, formAction] = useFormState(createPostComment, {});
  const [content, setContent] = useState("");

  return (
    <Fade in>
      <form action={formAction} onSubmit={() => setContent("")}>
        <Paper sx={{ pb: 1 }} elevation={0}>
          <Stack
            direction={["column", "row"]}
            gap={2}
            alignItems={["flex-end", "center"]}
          >
            <Avatar
              alt={user?.name}
              src={user?.name}
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            />
            <input hidden name="post" defaultValue={postId} />
            <TextField
              name="content"
              multiline
              label="Add a comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              fullWidth
            />

            <SubmitBtn title="Comment" disabled={!content} />
          </Stack>
        </Paper>
      </form>
    </Fade>
  );
};

export default CreateComment;

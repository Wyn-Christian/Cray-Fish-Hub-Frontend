"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

import { Avatar, Button, Paper, Stack, TextField } from "@mui/material";
import { createPost } from "@/actions/admin/forums";
import SubmitBtn from "./SubmitBtn";

const CreateForumPost = ({ threadId, user }) => {
  const [state, formAction] = useFormState(createPost, {});

  const [content, setContent] = useState("");

  return (
    <form action={formAction} onSubmit={() => setContent("")}>
      <Paper sx={{ m: 1, p: 2, border: "1px solid #999" }} elevation={0}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          alignItems={["flex-end", "center"]}
        >
          <Avatar
            alt={user?.name}
            src={user?.profilePath || "/assets/profile/img-1.png"}
            sx={{ width: 50, height: 50, display: ["none", "inline-flex"] }}
          />
          <input hidden name="thread" defaultValue={threadId} />
          <TextField
            name="content"
            multiline
            label={user ? "Add a post..." : "Log in first..."}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            minRows={3}
            disabled={user === null}
          />

          <SubmitBtn title="Post" disabled={!content || user === null} />
        </Stack>
      </Paper>
    </form>
  );
};

export default CreateForumPost;

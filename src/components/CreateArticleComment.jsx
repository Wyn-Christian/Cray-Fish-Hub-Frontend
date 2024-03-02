"use client";
import { useFormState } from "react-dom";

import { Box, Stack, TextField } from "@mui/material";

import { createArticleComment } from "@/actions/admin/articles";
import { useState } from "react";
import SubmitBtn from "./SubmitBtn";

const CreateArticleComment = ({ articleId, isLogin }) => {
  const [content, setContent] = useState("");
  const [state, formAction] = useFormState(createArticleComment, {
    article: articleId,
  });

  return (
    <Stack
      gap={2}
      component="form"
      action={formAction}
      onSubmit={() => setContent("")}
    >
      <input hidden name="article" defaultValue={articleId} />
      <TextField
        multiline
        name="content"
        label={
          !!isLogin ? "Write some of your comments..." : "Please Login First"
        }
        value={content}
        onChange={(e) => setContent(e.target.value)}
        minRows={3}
        maxRows={10}
        disabled={!isLogin}
      />
      <Box alignSelf="flex-end">
        <SubmitBtn title="Post Comment" disabled={!isLogin || !content} />
      </Box>
    </Stack>
  );
};

export default CreateArticleComment;

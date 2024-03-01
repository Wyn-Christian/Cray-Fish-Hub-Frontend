"use client";
import { useFormState } from "react-dom";

import { Box, Stack, TextField } from "@mui/material";

import SubmitBtn from "../SubmitBtn";

import { createArticleComment } from "@/actions/admin/articles";
import { useEffect, useState } from "react";

const CreateArticleComment = ({ articleId }) => {
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
        label="Write some of your comments..."
        minRows={3}
        maxRows={10}
      />
      <Box alignSelf="flex-end">
        <SubmitBtn title="Post Comment" disabled={!content} />
      </Box>
    </Stack>
  );
};

export default CreateArticleComment;

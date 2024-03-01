"use client";
import { useState } from "react";
import { useFormState } from "react-dom";

import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import Section from "@/components/Section";
import Detail from "@/components/Detail";
import CustomQuill from "@/components/CustomQuill";
import DisplayContent from "@/components/DisplayContent";

import { createArticle } from "@/actions/admin/articles";
import SubmitBtn from "@/components/SubmitBtn";

const ArticleCreateForm = () => {
  const [state, formAction] = useFormState(createArticle, {});

  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form action={formAction}>
      <Grid container>
        <Section title="Details" subtitle="Title, Category, Content...">
          <Stack gap={1.5}>
            <TextField name="title" label="Title" fullWidth required />

            <FormControl fullWidth required>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="category 1">Category 1</MenuItem>
                <MenuItem value="category 2">Category 2</MenuItem>
              </Select>
            </FormControl>

            {/* <TextField label="Content" multiline minRows={3} fullWidth /> */}
            <Detail title="Content">
              <CustomQuill content={content} setContent={setContent} />
              <input
                hidden={true}
                value={content}
                onChange={() => {}}
                name="content"
              />
            </Detail>
          </Stack>
        </Section>

        <Grid md={4} />

        <Grid xs={12} md={8} py={3} px={2}>
          <Stack direction="row" justifyContent="space-between">
            <FormControlLabel
              name="isPublished"
              control={<Switch defaultChecked />}
              label="Publish"
            />

            <SubmitBtn title="Create Article" />
          </Stack>
        </Grid>
        <Section title="Preview">
          <Detail title="Content Preview">
            <DisplayContent content={content} />
          </Detail>
        </Section>
      </Grid>
    </form>
  );
};

export default ArticleCreateForm;

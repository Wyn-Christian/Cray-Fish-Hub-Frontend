"use client";
import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import Section from "@/components/Section";
import Detail from "@/components/Detail";
import CustomQuill from "@/components/CustomQuill";
import DisplayContent from "@/components/DisplayContent";

const ArticleCreateForm = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    console.log(content);
  };

  return (
    <form>
      <Grid container>
        <Section title="Details" subtitle="Title, Category, Content...">
          <Stack gap={1.5}>
            <TextField label="Title" fullWidth />

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select value={category} label="Category" onChange={handleChange}>
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="category 1">Category 1</MenuItem>
                <MenuItem value="category 2">Category 2</MenuItem>
              </Select>
            </FormControl>

            {/* <TextField label="Content" multiline minRows={3} fullWidth /> */}
            <Detail title="Content">
              <CustomQuill content={content} setContent={setContent} />
            </Detail>
          </Stack>
        </Section>

        <Grid md={4} />

        <Grid xs={12} md={8} py={3} px={2}>
          <Stack direction="row" justifyContent="space-between">
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Publish"
            />

            <Button variant="contained" onClick={handleSubmit}>
              Create Article
            </Button>
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

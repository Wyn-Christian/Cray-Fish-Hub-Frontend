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
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import Section from "@/components/Section";
import CustomQuill from "@/components/CustomQuill";
import articleSample from "@/constants/articleSample";

const ArticlesEditForm = () => {
  const [content, setContent] = useState(articleSample);

  const [category, setCategory] = useState("general");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Grid container>
      <Section title="Details" subtitle="Title, Category, Content...">
        <Stack gap={1.5}>
          <TextField label="Title" fullWidth value="Sample Article Title" />

          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={category} label="Category" onChange={handleChange}>
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="category 1">Category 1</MenuItem>
              <MenuItem value="category 2">Category 2</MenuItem>
            </Select>
          </FormControl>

          <CustomQuill content={content} setContent={setContent} />
        </Stack>
      </Section>

      <Grid md={4} />

      <Grid xs={12} md={8} pt={3} px={2}>
        <Stack direction="row" justifyContent="space-between">
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Publish"
          />

          <Button variant="contained">Save Changes</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ArticlesEditForm;

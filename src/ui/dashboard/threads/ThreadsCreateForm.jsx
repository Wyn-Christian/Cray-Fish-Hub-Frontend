"use client";
import { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Section from "@/components/Section";

const ThreadsCreateForm = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <form>
      <Grid container>
        <Section title="Details" subtitle="Title, Category...">
          <Stack gap={1}>
            <TextField name="title" label="Title" fullWidth />
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select value={category} label="Category" onChange={handleChange}>
                <MenuItem value={"general"}>General</MenuItem>
                <MenuItem value={"q&a"}>Q&A</MenuItem>
                <MenuItem value={"Case Study"}>Case Study</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Section>
        <Grid md={4} />
        <Grid xs={12} md={8}>
          <Stack mt={1} alignItems="flex-end">
            <Button variant="contained">Create New Thread</Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default ThreadsCreateForm;

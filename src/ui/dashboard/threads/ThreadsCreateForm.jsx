"use client";
import { useState } from "react";
import { useFormState } from "react-dom";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Section from "@/components/Section";
import { createThread } from "@/actions/admin/forums";
import SubmitBtn from "@/components/SubmitBtn";

const ThreadsCreateForm = () => {
  const [state, formAction] = useFormState(createThread, {});

  const [category, setCategory] = useState("General");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <form action={formAction}>
      <Grid container>
        <Section title="Details" subtitle="Title, Category...">
          <Stack gap={1}>
            <TextField name="title" label="Title" fullWidth />
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={"General"}>General</MenuItem>
                <MenuItem value={"Q&A"}>Q&A</MenuItem>
                <MenuItem value={"Case Study"}>Case Study</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Section>
        <Grid md={4} />
        <Grid xs={12} md={8}>
          <Stack mt={1} alignItems="flex-end">
            <SubmitBtn title="Create New Thread" />
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default ThreadsCreateForm;

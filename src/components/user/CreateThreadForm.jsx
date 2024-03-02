"use client";
import { useState } from "react";
import { useFormState } from "react-dom";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Section from "../Section";
import SubmitBtn from "../SubmitBtn";

import { createThread } from "@/actions/users/forums";

const CreateThreadForm = ({ userType }) => {
  const isUserRegistered = userType === "Registered";

  const [state, formAction] = useFormState(createThread, {});

  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Grid container spacing={3}>
      <Section title="Create Thread" subtitle="Create your thread here...">
        <Stack gap={2} component="form" action={formAction}>
          <TextField
            name="title"
            label="Title"
            fullWidth
            required
            disabled={!isUserRegistered}
          />

          <FormControl fullWidth required disabled={!isUserRegistered}>
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

          <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
            <SubmitBtn
              title={
                isUserRegistered
                  ? "Create New Thread"
                  : "You're not still Registered"
              }
              disabled={!isUserRegistered}
            />
          </Box>
        </Stack>
      </Section>
    </Grid>
  );
};

export default CreateThreadForm;

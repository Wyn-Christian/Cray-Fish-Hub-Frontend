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
import { enqueueSnackbar } from "notistack";
import UploadThreadImages from "../UploadThreadImages";
import { uploadDocuments } from "@/utils/upload";
import { redirect } from "next/navigation";

const CreateThreadForm = ({ userType }) => {
  const isUserRegistered = userType === "Registered";

  const [images, setImages] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function formAction() {
    const uploaded_images = await uploadDocuments(images);

    if (!uploaded_images) {
      enqueueSnackbar("Image upload failed, try again...", {
        variant: "error",
      });
      return;
    }

    const new_thread = {
      ...formData,
      images: uploaded_images,
    };

    let result = await createThread(new_thread);

    if (result?.status === "success") {
      enqueueSnackbar("Create Thread successfully!", {
        variant: "success",
      });

      redirect(`/admin/forums/details/${result.data[0]._id}`);
    } else {
      enqueueSnackbar("Create Thread failed!", {
        variant: "error",
      });
    }
  }

  return (
    <Grid container spacing={3}>
      <Section title="Create Thread" subtitle="Create your thread here...">
        <Stack gap={2} component="form" action={formAction}>
          <TextField
            name="title"
            label="Title"
            value={formData.title}
            onChange={handleInputChange}
            fullWidth
            required
            disabled={!isUserRegistered}
          />

          <FormControl fullWidth required disabled={!isUserRegistered}>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              label="Category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <MenuItem value={"General"}>General</MenuItem>
              <MenuItem value={"Q&A"}>Q&A</MenuItem>
              <MenuItem value={"Case Study"}>Case Study</MenuItem>
            </Select>
          </FormControl>

          <UploadThreadImages setAllImages={setImages} />

          <Box alignSelf="flex-end" width="auto">
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

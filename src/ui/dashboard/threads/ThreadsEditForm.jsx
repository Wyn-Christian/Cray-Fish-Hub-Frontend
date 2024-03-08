"use client";
import { useState } from "react";

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
import { createThread, updateThread } from "@/actions/admin/forums";
import SubmitBtn from "@/components/SubmitBtn";
import { uploadDocuments } from "@/utils/upload";
import UploadThreadImages from "@/components/UploadThreadImages";
import { enqueueSnackbar } from "notistack";
import { redirect } from "next/navigation";

const ThreadsEditForm = ({ thread }) => {
  const [uploadedImages, setUploadedImages] = useState(thread.images);
  const [newImages, setNewImages] = useState([]);

  const [formData, setFormData] = useState(thread);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function formAction() {
    const uploaded_new_images = await uploadDocuments(newImages);
    if (!uploaded_new_images) {
      enqueueSnackbar("Image upload failed, try again...", {
        variant: "error",
      });
      return;
    }
    const new_thread = {
      ...formData,
      images: [...uploadedImages, ...uploaded_new_images],
    };
    let result = await updateThread(new_thread);
    if (result?.status === "success") {
      enqueueSnackbar("Create Thread successfully!", {
        variant: "success",
      });
      redirect(`/admin/forums/details/${result.data[0]._id}`);
    } else {
      console.log(result);
      enqueueSnackbar("Create Thread failed!", {
        variant: "error",
      });
    }
  }

  return (
    <form action={formAction}>
      <Grid container>
        <Section title="Details" subtitle="Title, Category...">
          <Stack gap={1}>
            <TextField
              name="title"
              label="Title"
              value={formData.title}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <FormControl fullWidth required>
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

            <UploadThreadImages
              setAllImages={setNewImages}
              setUploadedImages={setUploadedImages}
              uploadedImages={uploadedImages}
            />
          </Stack>
        </Section>
        <Grid md={4} />
        <Grid xs={12} md={8}>
          <Stack mt={1} alignItems="flex-end">
            <SubmitBtn title="Save Changes" />
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default ThreadsEditForm;

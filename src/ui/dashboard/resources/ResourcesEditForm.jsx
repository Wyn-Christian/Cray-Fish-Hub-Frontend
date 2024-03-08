"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { enqueueSnackbar } from "notistack";

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

import Section from "@/components/Section";
import UploadDocument from "@/components/UploadDocument";
import SubmitBtn from "@/components/SubmitBtn";

import { uploadDocuments } from "@/utils/upload";

import { updateResource } from "@/actions/admin/resources";

const ResourcesEditForm = ({ resource }) => {
  const [uploadedFiles, setUploadedFiles] = useState(resource.files);
  const [newFiles, setNewFiles] = useState([]);

  const [formData, setFormData] = useState(resource);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function formAction() {
    if (!uploadedFiles.length && !newFiles.length) {
      enqueueSnackbar("Please upload at least 1 document...", {
        variant: "warning",
      });
      return;
    }

    const uploaded_new_files = await uploadDocuments(newFiles);

    const new_resource = {
      ...formData,
      files: [...uploadedFiles, ...uploaded_new_files],
    };

    let result = await updateResource(new_resource);

    if (result.status === "success") {
      enqueueSnackbar("Resource update successfully!", { variant: "success" });

      redirect(`/admin/resources/details/${resource._id}`);
    }
  }

  return (
    <form action={formAction}>
      <Grid container spacing={3}>
        <Section title="Edit Resource" subtitle="Edit your resource here...">
          <Stack gap={2}>
            <Stack gap={2} direction={{ xs: "column", md: "row" }}>
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
                  <MenuItem value={"Manual"}>Manual</MenuItem>
                  <MenuItem value={"Case Study"}>Case Study</MenuItem>
                  <MenuItem value={"Legal"}>Legal</MenuItem>
                  <MenuItem value={"Calculator"}>Calculator</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <TextField
              name="description"
              label="Short Description"
              value={formData.description}
              onChange={handleInputChange}
              multiline
              minRows={3}
              fullWidth
              required
            />

            <UploadDocument
              allFiles={newFiles}
              setAllFiles={setNewFiles}
              defaultFiles={uploadedFiles}
              setDefaultFiles={setUploadedFiles}
            />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <SubmitBtn title="Save Changes" />
            </Box>
          </Stack>
        </Section>
      </Grid>
    </form>
  );
};

export default ResourcesEditForm;

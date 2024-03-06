"use client";
import { useState } from "react";

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
import { createResource } from "@/actions/admin/resources";
import SubmitBtn from "@/components/SubmitBtn";
import { enqueueSnackbar } from "notistack";
import { redirect } from "next/navigation";

const uploadDocuments = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("documents", file, file.name);
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/upload/documents`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  if (files.status === "fail") {
    enqueueSnackbar("Upload failed.", { variant: "fail" });
    return null;
  }
  return result.data;
};

const ResourcesCreateForm = ({ user }) => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
    if (!files.length) {
      enqueueSnackbar("Upload at least 1 document...", { variant: "warning" });
      return;
    }

    const uploaded_files = await uploadDocuments(files);

    if (!uploaded_files) return;

    const new_resource = {
      ...formData,
      uploader: user._id,
      status: "Approved",
      files: uploaded_files,
    };

    let result = await createResource(new_resource);
    if (result.status === "success") {
      enqueueSnackbar("Create Resource successfully!", { variant: "success" });
      redirect(`/admin/resources/details/${result.data[0]._id}`);
    }
  }

  return (
    <form action={formAction}>
      <Grid container spacing={3}>
        <Section title="Upload Resource" subtitle="Upload your file here...">
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

            <UploadDocument allFiles={files} setAllFiles={setFiles} />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <SubmitBtn title="Upload Resource" />
            </Box>
          </Stack>
        </Section>
      </Grid>
    </form>
  );
};

export default ResourcesCreateForm;

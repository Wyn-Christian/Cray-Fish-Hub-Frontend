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

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/upload/image`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();
  return result.data[0];
};

const ResourcesCreateForm = ({ user }) => {
  const [file, setFile] = useState(null);
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
    if (!file) return;

    const fileinfo = await uploadImage(file);

    const new_resource = {
      ...formData,
      uploader: user._id,
      status: "Approved",
      filePath: fileinfo.path,
      fileSize: fileinfo.size,
      fileName: fileinfo.name,
    };

    await createResource(new_resource);
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

            <UploadDocument file={file} setFile={setFile} />

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

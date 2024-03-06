"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import UploadDocument from "../UploadDocument";
import SubmitBtn from "../SubmitBtn";
import Section from "../Section";

import { createUserResource } from "@/actions/users/resources";
import { enqueueSnackbar } from "notistack";

const uploadImage = async (files) => {
  const formData = new FormData();
  formData.append("documents", files);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/upload/documents`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();
  return result.data;
};

const UploadResourceForm = ({ userType, _id }) => {
  const isUserRegistered = userType === "Registered";

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
    if (!files) return;

    const fileinfo = await uploadImage(files);

    const new_resource = {
      ...formData,
      uploader: _id,
      status: "Pending",
      filePath: fileinfo.path,
      fileSize: fileinfo.size,
      fileName: fileinfo.name,
    };

    const result = await createUserResource(new_resource);

    if (result?.status === "success") {
      setFormData({
        title: "",
        description: "",
        category: "",
      });

      setFiles(null);
      enqueueSnackbar("Resource Uploaded Successfully", { variant: "success" });
    }
  }

  return (
    <form action={formAction}>
      <Grid container spacing={3}>
        <Section
          title="Upload Resource"
          subtitle="Upload your file here and wait for the approval..."
        >
          <Stack gap={2}>
            <Stack gap={2} direction={{ xs: "column", md: "row" }}>
              <TextField
                name="title"
                label="Title"
                value={formData.title}
                onChange={handleInputChange}
                fullWidth
                disabled={!isUserRegistered}
                required
              />

              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  label="Category"
                  value={formData.category}
                  onChange={handleInputChange}
                  disabled={!isUserRegistered}
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
              disabled={!isUserRegistered}
              required
            />

            <UploadDocument allFiles={files} setAllFiles={setFiles} />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <SubmitBtn
                title={
                  isUserRegistered
                    ? "Upload Resource"
                    : "You're not still Registered"
                }
                disabled={!isUserRegistered}
              />
            </Box>
          </Stack>
        </Section>
      </Grid>
    </form>
  );
};

export default UploadResourceForm;

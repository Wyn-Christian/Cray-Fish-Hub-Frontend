"use client";
import { useState } from "react";
import Image from "next/image";

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

import DownloadIcon from "@mui/icons-material/Download";
import Section from "@/components/Section";
import UploadDocument from "@/components/UploadDocument";

const UploadResource = () => {
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Grid container spacing={3}>
      <Grid md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h6" mb={0.5}>
          Upload Resource
        </Typography>
        <Typography variant="body2" color="#919eab">
          Upload your file here and wait for the approval...
        </Typography>
      </Grid>

      <Grid xs={12} md={8}>
        <Card
          elevation={0}
          sx={{
            overflow: "hidden",
            position: "relative",
            boxShadow:
              "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
            zIndex: 0,
            borderRadius: 4,
            p: 3,
          }}
        >
          <CardHeader
            title={<Typography variant="h6">Upload Resource</Typography>}
            sx={{ display: { xs: "flex", md: "none" }, pt: 0, pl: 0 }}
          />

          <Stack gap={2}>
            <Stack gap={2} direction={{ xs: "column", md: "row" }}>
              <TextField name="title" label="Title" fullWidth />

              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={"manual"}>Manual</MenuItem>
                  <MenuItem value={"case study"}>Case Study</MenuItem>
                  <MenuItem value={"legal"}>Legal</MenuItem>
                  <MenuItem value={"calculator"}>Calculator</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <TextField
              name="description"
              label="Short Description"
              multiline
              minRows={3}
              fullWidth
            />

            <UploadDocument file={file} setFile={setFile} />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <Button variant="contained" fullWidth>
                Upload Resource
              </Button>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};
const ResourcesCreateForm = () => {
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <form>
      <Grid container spacing={3}>
        <Section title="Upload Resource" subtitle="Upload your file here...">
          <Stack gap={2}>
            <Stack gap={2} direction={{ xs: "column", md: "row" }}>
              <TextField name="title" label="Title" fullWidth />

              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={"manual"}>Manual</MenuItem>
                  <MenuItem value={"case study"}>Case Study</MenuItem>
                  <MenuItem value={"legal"}>Legal</MenuItem>
                  <MenuItem value={"calculator"}>Calculator</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <TextField
              name="description"
              label="Short Description"
              multiline
              minRows={3}
              fullWidth
            />

            <UploadDocument file={file} setFile={setFile} />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <Button variant="contained" fullWidth>
                Upload Resource
              </Button>
            </Box>
          </Stack>
        </Section>
      </Grid>
    </form>
  );
};

export default ResourcesCreateForm;

"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TabPanel from "./TabPanel";
import TabHeader from "./TabHeader";
import UploadDocuments from "../UploadDocument";

import DownloadIcon from "@mui/icons-material/Download";

const UploadResources = () => {
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

            <UploadDocuments file={file} setFile={setFile} />

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

const ResourceStatus = ({ value }) => {
  let color, bgcolor;
  switch (value) {
    case "pending":
      color = "#637381";
      bgcolor = "#919eab29";
      break;
    case "approved":
      color = "#006c9c";
      bgcolor = "#00b8d929";
      break;
    case "rejected":
      color = "#9c0021";
      bgcolor = "#d9000029";
      break;
  }

  return (
    <Box
      sx={{
        height: 30,
        minWidth: 30,
        lineHeight: 0,
        cursor: "default",
        borderRadius: 1.5,
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        textTransform: "capitalize",
        px: 1.5,
        fontSize: "0.87rem",
        fontWeight: 700,
        color,
        bgcolor,
      }}
    >
      {value}
    </Box>
  );
};

const ResourcePaper = ({
  author,
  title,
  date_created,
  date_submitted,
  status,
}) => {
  return (
    <Grid xs={12} sm={6}>
      <Stack
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Stack gap={1} p={3} bgcolor="#fee9d1">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <ResourceStatus value="approved" />
            <Typography variant="body2" fontWeight={600} sx={{ color: "#777" }}>
              Feb 12, 2024
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Image
              src={"/assets/files/ic_pdf.svg"}
              alt="File Icon"
              width={50}
              height={50}
            />
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Stack>
          <Stack
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography variant="h6">Resource Sample Title</Typography>
            <Typography variant="subtitle2" fontWeight={600} color="#585858">
              Category
            </Typography>
          </Stack>

          <Typography variant="body2" color="#637381" fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sint
            dignissimos, libero itaque nihil commodi ipsam molestias doloremque?
            Rerum unde
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

const ResourcesTab = ({ value, index }) => {
  const [statusTab, setStatusTab] = useState("all");
  const handleStatusTabChange = (event, newValue) => {
    setStatusTab(newValue);
  };

  return (
    <TabPanel value={value} index={index}>
      <UploadResources />

      <TabHeader title="My Resources" />

      <Tabs
        value={statusTab}
        onChange={handleStatusTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            minHeight: 48,
            minWidth: 48,
            fontWeight: 600,
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="Pending" value="pending" />
        <Tab label="Approved" value="approved" />
        <Tab label="Rejected" value="rejected" />
      </Tabs>

      <Grid container spacing={2}>
        <ResourcePaper />
        <ResourcePaper />
        <ResourcePaper />
        <ResourcePaper />
      </Grid>
    </TabPanel>
  );
};

export default ResourcesTab;

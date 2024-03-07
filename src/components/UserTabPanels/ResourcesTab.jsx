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

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import UploadResourceForm from "../user/UploadResourceForm";
import getFileIcon from "@/utils/getFileIcon";
import moment from "moment";
import { Masonry } from "@mui/lab";

const ResourceStatus = ({ value }) => {
  let color, bgcolor;
  switch (value) {
    case "Pending":
      color = "#637381";
      bgcolor = "#919eab29";
      break;
    case "Approved":
      color = "#006c9c";
      bgcolor = "#00b8d929";
      break;
    case "Rejected":
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
  href,
  _id,
  title,
  description,
  status,
  files,
  category,
  createdAt,
}) => {
  return (
    // <Grid xs={12} sm={6}>
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
          <ResourceStatus value={status} />
          <Typography variant="body2" fontWeight={600} sx={{ color: "#777" }}>
            {moment(createdAt).format("MMM DD, YYYY")}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={-2.5} alignItems="flex-end">
          {files?.slice(0, 3).map((file, i) => (
            <Image
              key={i}
              src={getFileIcon(file.path)}
              alt="File Icon"
              width={50}
              height={50}
            />
          ))}
          {files.length > 3 && (
            <Typography variant="h5" pl={2}>
              ...
            </Typography>
          )}
        </Stack>
        <Stack
          sx={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            {category}
          </Typography>
        </Stack>

        <Typography variant="body2" color="#637381" fontWeight={400}>
          {description}
        </Typography>
      </Stack>
    </Stack>
    // </Grid>
  );
};

const ResourcesTab = ({ value, index, user, resources }) => {
  const [statusTab, setStatusTab] = useState("all");
  const handleStatusTabChange = (event, newValue) => {
    setStatusTab(newValue);
  };

  return (
    <TabPanel value={value} index={index}>
      <UploadResourceForm {...user} />

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
        <Tab label="Pending" value="Pending" />
        <Tab label="Approved" value="Approved" />
        <Tab label="Rejected" value="Rejected" />
      </Tabs>

      {/* <Grid container spacing={2}> */}
      <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
        {resources
          .filter((a) => {
            return statusTab !== "all" ? a.status === statusTab : true;
          })
          .map((resource) => (
            <ResourcePaper key={resource._id} {...resource} />
          ))}
      </Masonry>
      {/* </Grid> */}
    </TabPanel>
  );
};

export default ResourcesTab;

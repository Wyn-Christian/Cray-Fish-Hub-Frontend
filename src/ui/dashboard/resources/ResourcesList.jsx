"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Avatar,
  Box,
  IconButton,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";

import DownloadIcon from "@mui/icons-material/Download";

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
  description,
  date_created,
  date_submitted,
  status,
}) => {
  return (
    <Stack
      component={Link}
      href="/admin/resources/details/123"
      sx={{
        textDecoration: "none",
        color: "inherit",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        "&:hover": {
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
          "& .MuiTypography-h6": {
            textDecoration: "underline",
          },
        },
      }}
    >
      <Stack gap={1} p={3} bgcolor="#fee9d1">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          temporibus dolor nulla officia sed tempore neque in id fugiat? Sed
          ullam veniam doloribus saepe aperiam explicabo repellat dolor tempora
          ratione?
        </Typography>
      </Stack>
    </Stack>
  );
};

const ResourcesList = () => {
  const [category, setCategory] = useState("all");
  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <Box>
      <Tabs
        value={category}
        onChange={handleCategoryChange}
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
      </Tabs>

      <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
        <ResourcePaper />
        <ResourcePaper />
        <ResourcePaper />
        <ResourcePaper />
      </Masonry>
    </Box>
  );
};

export default ResourcesList;

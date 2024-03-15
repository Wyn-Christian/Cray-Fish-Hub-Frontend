"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import getFileIcon from "@/utils/getFileIcon";
import moment from "moment";
import ProfileLink from "@/components/ProfileLink";
import SearchField from "@/components/admin/SearchField";

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
  _id,
  uploader,
  title,
  category,
  description,
  files,
  createdAt,
  status,
}) => {
  return (
    <Stack
      component={Link}
      href={`/admin/resources/details/${_id}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
        bgcolor: "#fee9d1",
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
      <Stack gap={1} px={3} pt={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
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
      <Box px={3} pb={3}>
        <ProfileLink
          href={`/admin/users/profile/${uploader?._id}`}
          src={uploader?.profilePath}
          name={uploader?.name}
        />
      </Box>
    </Stack>
  );
};

const ResourcesList = ({ resources }) => {
  const [category, setCategory] = useState("all");
  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <Box>
      <Stack mb={1}>
        <SearchField />
      </Stack>

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
        <Tab label="Pending" value="Pending" />
        <Tab label="Approved" value="Approved" />
      </Tabs>

      <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
        {resources
          .filter((a) => {
            return category !== "all" ? a.status === category : true;
          })
          .map((resource) => (
            <ResourcePaper key={resource._id} {...resource} />
          ))}
      </Masonry>
    </Box>
  );
};

export default ResourcesList;

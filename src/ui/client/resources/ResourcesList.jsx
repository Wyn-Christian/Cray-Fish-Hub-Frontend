"use client";
import Image from "next/image";
import Link from "next/link";

import {
  Stack,
  Typography,
  Avatar,
  IconButton,
  ListItemText,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import getFileIcon from "@/utils/getFileIcon";
import moment from "moment";
import SearchField from "@/components/admin/SearchField";

const ResourcePaper = ({
  _id,
  title,
  description,
  files,
  filePath,
  fileName,
  category,
  createdAt,
  uploader,
}) => {
  const handleClick = () => {
    window.open(filePath, "_blank", "noopener,noreferrer");
  };
  return (
    <Stack
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        "&:hover": {
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
      }}
    >
      <Stack gap={1} p={3} bgcolor="#fee9d1">
        <Stack direction="row" spacing={-2.5} alignItems="flex-end">
          {files?.slice(0, 3).map((file) => (
            <Image
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

        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            pt: 1.5,
            color: "#212b36",
            textDecoration: "none",
            "&:hover": {
              "& .MuiListItemText-primary": { textDecoration: "underline" },
            },
          }}
          component={Link}
          href={`/profile/${uploader?._id}`}
        >
          <Avatar
            alt={uploader?.name}
            src={uploader?.profilePath || "/assets/profile/img-1.png"}
            sx={{ mr: 1 }}
          />
          <ListItemText
            primary={uploader?.name}
            primaryTypographyProps={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            secondary={moment(createdAt).format("MMM DD, YYYY")}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

const ResourcesList = ({ resources }) => {
  return (
    <>
      <Stack mb={3}>
        <SearchField />
      </Stack>

      <Masonry columns={{ xs: 1, sm: 2, md: 4 }}>
        {resources.map((resource) => (
          <ResourcePaper key={resource._id} {...resource} />
        ))}
      </Masonry>
    </>
  );
};

export default ResourcesList;

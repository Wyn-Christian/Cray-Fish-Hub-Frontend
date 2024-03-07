import Image from "next/image";
import Link from "next/link";

import { IconButton, Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import TabPanel from "../UserTabPanels/TabPanel";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DownloadIcon from "@mui/icons-material/Download";
import TabHeader from "../UserTabPanels/TabHeader";
import moment from "moment";
import getFileIcon from "@/utils/getFileIcon";

const ResourcePaper = ({
  href,
  _id,
  title,
  description,
  files,
  category,
  createdAt,
}) => {
  return (
    <Stack
      component={href ? Link : "div"}
      href={href}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        textDecoration: "none",
        color: "inherit",
        transition: "all 2ms ease",
        "&:hover": {
          "& .MuiTypography-h6": {
            textDecoration: href ? "underline" : "none",
          },
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
      }}
    >
      <Stack gap={1} p={3} bgcolor="#fee9d1">
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
          <Typography variant="caption" fontWeight={600} sx={{ color: "#777" }}>
            {moment(createdAt).format("MMM DD, YYYY")}
          </Typography>
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            {category}
          </Typography>
        </Stack>

        <Typography variant="body2" color="#637381" fontWeight={400}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

const ResourcesTab = ({ index, value, user, resources, route }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title={`${user.name}'s Resources`} />

      <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
        {resources
          .filter((resource) => resource.status === "Approved")
          .map((resource) => (
            <ResourcePaper
              key={resource._id}
              {...resource}
              href={route ? `${route}/${resource._id}` : null}
            />
          ))}
      </Masonry>
    </TabPanel>
  );
};

export default ResourcesTab;

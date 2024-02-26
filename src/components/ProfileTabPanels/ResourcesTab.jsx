import Image from "next/image";
import { IconButton, Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import TabPanel from "../UserTabPanels/TabPanel";

import DownloadIcon from "@mui/icons-material/Download";
import TabHeader from "../UserTabPanels/TabHeader";

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
          <Typography variant="caption" fontWeight={600} sx={{ color: "#777" }}>
            Feb 12, 2024
          </Typography>
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

const ResourcesTab = ({ index, value }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title="Kim Dahyun's Resources" />

      <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
        <ResourcePaper />
        <ResourcePaper />
        <ResourcePaper />
        <ResourcePaper />
      </Masonry>
    </TabPanel>
  );
};

export default ResourcesTab;

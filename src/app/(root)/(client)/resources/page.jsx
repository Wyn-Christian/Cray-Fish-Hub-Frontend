import Image from "next/image";

import Header from "@/components/Header";
import {
  Box,
  Container,
  Stack,
  Typography,
  Avatar,
  IconButton,
  ListItemText,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import DownloadIcon from "@mui/icons-material/Download";
import Link from "next/link";

const ResourcePaper = ({ author, title, date_created }) => {
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
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            Category
          </Typography>
          <Typography variant="caption" fontWeight={500} color="#585858">
            12k downloads
          </Typography>
        </Stack>

        <Typography variant="body2" color="#637381" fontWeight={400}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sint
          dignissimos, libero itaque nihil commodi ipsam molestias doloremque?
          Rerum unde
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
          href="/profile/123"
        >
          <Avatar
            src="/assets/profile/pic-7.jpg"
            alt="Article Author"
            sx={{ mr: 1 }}
          />
          <ListItemText primary="Resource Author" secondary="feb 3, 2024" />
        </Stack>
      </Stack>
    </Stack>
  );
};

const ResourcesPage = () => {
  return (
    <Box>
      <Header title="Resources" />

      <Container sx={{ mt: 3 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }}>
          <ResourcePaper />
          <ResourcePaper />
          <ResourcePaper />
          <ResourcePaper />
        </Masonry>
      </Container>
    </Box>
  );
};

export default ResourcesPage;

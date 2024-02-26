import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import TabPanel from "../UserTabPanels/TabPanel";
import TabHeader from "../UserTabPanels/TabHeader";

const ThreadPaper = ({ href, title, date_created }) => {
  return (
    <Stack
      component={Link}
      href="/forums/thread/123"
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        textDecoration: "none",
        color: "inherit",
        transition: "all 2ms ease",
        "&:hover": {
          "& .MuiTypography-h6": {
            textDecoration: "underline",
          },
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
      }}
    >
      <Stack gap={1} p={3} bgcolor="#fee9d1">
        <Typography variant="h6">Thread Sample Title</Typography>
        <Typography variant="subtitle2" fontWeight={600} color="#585858">
          Category
        </Typography>
      </Stack>
    </Stack>
  );
};

const ThreadsTab = ({ index, value }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title="Kim Dahyun's Threads" />

      <Masonry columns={{ xs: 1, sm: 2 }}>
        <ThreadPaper />
        <ThreadPaper />
        <ThreadPaper />
        <ThreadPaper />
        <ThreadPaper />
        <ThreadPaper />
        <ThreadPaper />
      </Masonry>
    </TabPanel>
  );
};

export default ThreadsTab;

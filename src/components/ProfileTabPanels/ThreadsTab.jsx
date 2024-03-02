import moment from "moment";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import TabPanel from "../UserTabPanels/TabPanel";
import TabHeader from "../UserTabPanels/TabHeader";

const ThreadPaper = ({ href, title, category, createdAt }) => {
  return (
    <Stack
      component={Link}
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
            textDecoration: "underline",
          },
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
      }}
    >
      <Stack p={3} bgcolor="#fee9d1">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2" fontWeight={600} color="#585858">
          {category}
        </Typography>
        <Typography variant="caption" fontWeight={500} color="#585858">
          {moment(createdAt).format("MMM DD, YYYY")}
        </Typography>
      </Stack>
    </Stack>
  );
};

const ThreadsTab = ({ index, value, user, threads, route }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title={`${user.name}'s Threads`} />

      <Masonry columns={{ xs: 1, sm: 2 }}>
        {threads.map((thread) => (
          <ThreadPaper
            key={thread._id}
            {...thread}
            href={`${route}/${thread._id}`}
          />
        ))}
      </Masonry>
    </TabPanel>
  );
};

export default ThreadsTab;

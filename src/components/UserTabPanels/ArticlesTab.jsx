import { Box, Typography } from "@mui/material";
import TabPanel from "./TabPanel";
import TabHeader from "./TabHeader";

const ArticlesTab = ({ value, index }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title="My Articles" />
    </TabPanel>
  );
};

export default ArticlesTab;

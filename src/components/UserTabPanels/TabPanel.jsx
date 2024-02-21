import { Box } from "@mui/material";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabPanel;

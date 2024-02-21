import { Typography } from "@mui/material";

const TabHeader = ({ title }) => {
  return (
    <Typography my={5} variant="h4" textAlign={{ xs: "center", sm: "start" }}>
      {title}
    </Typography>
  );
};

export default TabHeader;

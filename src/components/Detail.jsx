import { Stack, Typography } from "@mui/material";

const Detail = ({ title, value, children }) => {
  return (
    <Stack>
      <Typography variant="subtitle2" color="#919eab">
        {title}
      </Typography>
      {!children ? <Typography variant="h6"> {value}</Typography> : children}
    </Stack>
  );
};

export default Detail;

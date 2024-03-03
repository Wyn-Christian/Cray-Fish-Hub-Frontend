import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const BasicSummaryInfo = ({ title, count, icon, background, color }) => (
  <Grid xs={12} sm={6} md={3}>
    <Stack
      sx={{
        alignItems: "center",
        py: 5,
        borderRadius: 4,
        textAlign: "center",
        background,
        color,
      }}
    >
      {icon}

      <Typography variant="h3">{count}</Typography>
      <Typography
        variant="subtitle2"
        sx={{ opacity: 0.64, textTransform: "capitalize" }}
      >
        {title}
      </Typography>
    </Stack>
  </Grid>
);

export default BasicSummaryInfo;

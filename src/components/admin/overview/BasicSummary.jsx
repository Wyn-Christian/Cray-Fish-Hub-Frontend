import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const BasicSummaryInfo = ({ title, count, icon, background, color, href }) => (
  <Grid xs={12} sm={6} md={3}>
    <Stack
      component={Link}
      href={href}
      sx={{
        alignItems: "center",
        py: 5,
        borderRadius: 4,
        textAlign: "center",
        background,
        color,
        textDecoration: "none",
        transition: "all 2ms ease",
        "&:hover": {
          "& .MuiTypography-subtitle2": {
            textDecoration: "underline",
          },
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
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

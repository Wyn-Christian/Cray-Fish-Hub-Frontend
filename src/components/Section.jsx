import { Card, CardHeader, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Section = ({ title, subtitle, children }) => (
  <>
    <Grid md={4} sx={{ display: { xs: "none", md: "block" } }}>
      <Typography variant="h5" mb={0.5}>
        {title}
      </Typography>
      <Typography variant="body2" color="#919eab">
        {subtitle}
      </Typography>
    </Grid>

    <Grid xs={12} md={8}>
      <Card
        elevation={0}
        sx={{
          overflow: "hidden",
          position: "relative",
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
          zIndex: 0,
          borderRadius: 4,
          p: 3,
        }}
      >
        <CardHeader
          title={<Typography variant="h6">{title}</Typography>}
          sx={{ p: "0 0 10px 0", display: { xs: "flex", md: "none" } }}
        />

        {children}
      </Card>
    </Grid>
  </>
);
export default Section;

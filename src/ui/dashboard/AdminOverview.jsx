import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import FeedIcon from "@mui/icons-material/Feed";
import PeopleIcon from "@mui/icons-material/People";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import BasicSummaryInfo from "@/components/admin/overview/BasicSummary";

const AdminOverview = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <BasicSummaryInfo
          title="In Draft Articles"
          icon={<FeedIcon sx={{ fontSize: 64 }} />}
          count={123}
          background="linear-gradient(135deg, rgba(185, 133, 244, 0.2), rgba(118, 53, 220, 0.2)) rgb(255, 255, 255)"
          color="#2c1870"
        />
        <BasicSummaryInfo
          title="Total Users"
          icon={<PeopleIcon sx={{ fontSize: 64 }} />}
          count={723}
          background="linear-gradient(135deg, rgba(97, 243, 243, 0.2), rgba(0, 184, 217, 0.2)) rgb(255, 255, 255)"
          color="#003768"
        />
        <BasicSummaryInfo
          title="Pending Resources"
          icon={<FolderSharedIcon sx={{ fontSize: 64 }} />}
          count={1023}
          background="linear-gradient(135deg, rgba(255, 214, 102, 0.2), rgba(255, 171, 0, 0.2)) rgb(255, 255, 255)"
          color="#7a4100"
        />
        <BasicSummaryInfo
          title="Unregistered Users"
          icon={<PeopleAltIcon sx={{ fontSize: 64 }} />}
          count={4032}
          background="linear-gradient(135deg, rgba(255, 172, 130, 0.2), rgba(255, 86, 48, 0.2)) rgb(255, 255, 255)"
          color="#7a0916"
        />
      </Grid>
    </Container>
  );
};

export default AdminOverview;

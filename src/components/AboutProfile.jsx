import { Card, CardHeader, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GppGoodIcon from "@mui/icons-material/GppGood";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";

const AboutProfile = ({ name, email, userType, username }) => {
  const Detail = ({ icon, title }) => (
    <Stack direction="row" gap={1} alignItems="center">
      {icon}
      <Typography variant="subtitle2" color="#343333" fontWeight={400}>
        {title}
      </Typography>
    </Stack>
  );
  let icon;
  switch (userType) {
    case "Admin":
      icon = <AdminPanelSettingsIcon />;
      break;
    case "Registered":
      icon = <GppGoodIcon />;
      break;
    default:
      icon = <SafetyCheckIcon />;
      break;
  }
  return (
    <Grid xs={12} md={4}>
      <Card
        elevation={0}
        sx={{
          overflow: "hidden",
          position: "relative",
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
          zIndex: 0,
          borderRadius: 4,
        }}
      >
        <CardHeader
          title={<Typography variant="h6">About</Typography>}
          sx={{ p: "24px 24px 0" }}
        />
        <Stack gap={2} p={3}>
          <Detail icon={<BadgeIcon />} title={name} />
          <Detail icon={<EmailIcon />} title={email} />
          <Detail icon={<AlternateEmailIcon />} title={username} />
          <Detail icon={icon} title={`${userType} User`} />
        </Stack>
      </Card>
    </Grid>
  );
};

export default AboutProfile;

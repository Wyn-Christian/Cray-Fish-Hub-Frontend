import {
  Box,
  Button,
  Card,
  CardHeader,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TabHeader from "./TabHeader";

const PersonalDetails = () => {
  return (
    <Grid container spacing={3}>
      <Grid md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h6" mb={0.5}>
          Personal Details
        </Typography>
        <Typography variant="body2" color="#919eab">
          Here are your details...
        </Typography>
      </Grid>

      <Grid xs={12} md={8}>
        <Card
          elevation={0}
          sx={{
            overflow: "hidden",
            position: "relative",
            boxShadow:
              "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
            zIndex: 0,
            borderRadius: 4,
            p: 3,
          }}
        >
          <CardHeader
            title={<Typography variant="h6">Personal Details</Typography>}
            sx={{ display: { xs: "flex", md: "none" }, pt: 0, pl: 0 }}
          />

          <Stack gap={2}>
            <Stack gap={2} direction={{ xs: "column", md: "row" }}>
              <TextField
                name="first_name"
                label="First Name"
                value="Soo"
                fullWidth
              />
              <TextField
                name="last_name"
                label="Last Name"
                value="Chaeyoung"
                fullWidth
                // error
                sx={{
                  "& .Mui-error": {
                    color: "blue",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "blue",
                    },
                  },
                }}
              />
            </Stack>

            <TextField
              name="username"
              label="Username"
              value="chaeyo.0"
              fullWidth
            />

            <TextField
              name="email"
              label="Email"
              value="soo.chaeyoung@gmail.com"
              fullWidth
            />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <Button variant="contained" fullWidth>
                Save Changes
              </Button>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

const ChangePassword = () => {
  return (
    <Grid container spacing={3}>
      <Grid md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h6" mb={0.5}>
          Change Password
        </Typography>
        <Typography variant="body2" color="#919eab">
          Change your password here...
        </Typography>
      </Grid>

      <Grid xs={12} md={8}>
        <Card
          elevation={0}
          sx={{
            overflow: "hidden",
            position: "relative",
            boxShadow:
              "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
            zIndex: 0,
            borderRadius: 4,
            p: 3,
          }}
        >
          <CardHeader
            title={<Typography variant="h6">Change Password</Typography>}
            sx={{ display: { xs: "flex", md: "none" }, pt: 0, pl: 0 }}
          />

          <Stack gap={2}>
            <TextField
              name="old_password"
              label="Old Password"
              type="password"
              required
              fullWidth
            />

            <TextField
              name="new_password"
              label="New Password"
              type="password"
              required
              fullWidth
            />
            <TextField
              name="new_repassword"
              label="Re-enter New Password"
              type="password"
              required
              fullWidth
            />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <Button variant="contained" fullWidth>
                Update Password
              </Button>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

const ProfileTab = ({ value, index }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title="Profile" />

      <PersonalDetails />

      <ChangePassword />
    </TabPanel>
  );
};

export default ProfileTab;

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
import Section from "../Section";

const ProfileTab = ({ value, index }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title="Profile" />

      <Grid container spacing={3}>
        <Section title="Personal Details" subtitle="Here are your details...">
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
        </Section>
      </Grid>

      <Grid container spacing={3}>
        <Section
          title="Change Password"
          subtitle="Change your password here..."
        >
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
        </Section>
      </Grid>
    </TabPanel>
  );
};

export default ProfileTab;

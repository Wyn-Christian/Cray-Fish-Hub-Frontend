import { Box, Button, Stack, TextField } from "@mui/material";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TabHeader from "./TabHeader";
import Section from "../Section";

import PersonalDetailsForm from "../user/PersonalDetailsForm";

const ProfileTab = ({ value, index, user }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title="Profile" />

      <Grid container spacing={3}>
        <PersonalDetailsForm {...user} />

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

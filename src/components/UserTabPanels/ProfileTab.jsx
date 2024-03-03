import { Box, Button, Stack, TextField } from "@mui/material";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TabHeader from "./TabHeader";
import Section from "../Section";

import PersonalDetailsForm from "../user/PersonalDetailsForm";
import ChangePasswordForm from "../user/ChangePasswordForm";

const ProfileTab = ({ value, index, user }) => {
  return (
    <TabPanel value={value} index={index}>
      <TabHeader title="Profile" />

      <Grid container spacing={3}>
        <PersonalDetailsForm {...user} />

        <ChangePasswordForm {...user} />
      </Grid>
    </TabPanel>
  );
};

export default ProfileTab;

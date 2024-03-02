"use client";
import { useFormState } from "react-dom";

import { Box, Stack, TextField } from "@mui/material";

import Section from "../Section";
import SubmitBtn from "../SubmitBtn";

import { updateUser } from "@/actions/users/account";

const PersonalDetailsForm = ({ _id, name, username, email }) => {
  const [state, formAction] = useFormState(updateUser, { id: _id });

  return (
    <Section title="Personal Details" subtitle="Here are your details...">
      <Stack gap={2} component="form" action={formAction}>
        <input hidden name="id" defaultValue={_id} />
        <TextField
          name="name"
          label="Full Name"
          defaultValue={name}
          fullWidth
        />

        <TextField
          name="username"
          label="Username"
          defaultValue={username}
          fullWidth
        />

        <TextField name="email" label="Email" defaultValue={email} fullWidth />

        <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
          <SubmitBtn title="Save Changes" />
        </Box>
      </Stack>
    </Section>
  );
};

export default PersonalDetailsForm;

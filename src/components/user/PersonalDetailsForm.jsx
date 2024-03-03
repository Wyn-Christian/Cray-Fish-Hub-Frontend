"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import { enqueueSnackbar } from "notistack";

import { Box, Stack, TextField } from "@mui/material";

import Section from "../Section";
import SubmitBtn from "../SubmitBtn";

import { updateUser } from "@/actions/users/account";

const PersonalDetailsForm = ({ _id, name, username, email }) => {
  const [state, formAction] = useFormState(updateUser, { id: _id });

  useEffect(() => {
    if (state?.status === "fail") {
      enqueueSnackbar(state?.message, { variant: "error" });
    }
    if (state?.status === "success") {
      enqueueSnackbar("Update user account successfully!", {
        variant: "success",
      });
      redirect(`/profile/${state.data[0]._id}`);
    }
  }, [state]);

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
          error={state?.message?.includes("Username")}
          helperText={
            state?.message?.includes("Username")
              ? state?.message
              : "Enter your username"
          }
        />

        <TextField
          name="email"
          label="Email"
          defaultValue={email}
          fullWidth
          error={state?.message?.includes("Email")}
          helperText={
            state?.message?.includes("Email")
              ? state?.message
              : "Enter your email"
          }
        />

        <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
          <SubmitBtn title="Save Changes" />
        </Box>
      </Stack>
    </Section>
  );
};

export default PersonalDetailsForm;

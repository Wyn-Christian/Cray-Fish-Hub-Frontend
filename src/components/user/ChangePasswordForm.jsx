"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import { enqueueSnackbar } from "notistack";

import { Box, Button, Stack, TextField } from "@mui/material";

import Section from "../Section";
import SubmitBtn from "../SubmitBtn";

import { changePassword } from "@/actions/users/account";

const ChangePasswordForm = ({ _id }) => {
  const [state, formAction] = useFormState(changePassword, { id: _id });
  useEffect(() => {
    if (state?.status === "success") {
      enqueueSnackbar("Change password successfully!", { variant: "success" });
    }
  }, [state]);

  return (
    <Section title="Change Password" subtitle="Change your password here...">
      <Stack gap={2} component="form" action={formAction}>
        <input hidden name="id" defaultValue={_id} />

        <TextField
          name="old_password"
          label="Old Password"
          type="password"
          required
          fullWidth
          error={state?.message?.includes("Old password")}
          helperText={
            state?.message?.includes("Old password")
              ? "Incorrect old password"
              : "Enter your old password"
          }
        />

        <TextField
          name="new_password"
          label="New Password"
          type="password"
          required
          fullWidth
          error={state?.message?.includes("Password")}
          helperText={
            state?.message?.includes("Password")
              ? state?.message
              : "Enter your new password"
          }
        />
        <TextField
          name="repassword"
          label="Re-enter New Password"
          type="password"
          required
          fullWidth
          error={state?.message?.includes("Password")}
          helperText={
            state?.message?.includes("Password")
              ? state?.message
              : "Re-enter your new password"
          }
        />

        <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
          <SubmitBtn title="Update Password" />
        </Box>
      </Stack>
    </Section>
  );
};

export default ChangePasswordForm;

"use client";
import { useFormState } from "react-dom";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import SubmitBtn from "./SubmitBtn";
import { signup } from "@/actions/auth";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { redirect } from "next/navigation";

const SignUpAuthForm = () => {
  const [state, formAction] = useFormState(signup, null);

  useEffect(() => {
    if (state?.status === "fail") {
      enqueueSnackbar(state?.message, { variant: "error" });
    }
    if (state?.status === "success") {
      enqueueSnackbar("Sign up successfully!", { variant: "success" });
      enqueueSnackbar("Please Log in!", { variant: "success" });
      redirect("/login");
    }
  }, [state]);

  return (
    <Box>
      <Box mb={4}>
        <Typography
          variant="body1"
          textTransform="uppercase"
          fontWeight={500}
          color="#677788"
        >
          Sign up
        </Typography>
        <Typography variant="h4">Create An Account</Typography>
        <Typography variant="body1" color="#677788">
          Fill out the form to get started.
        </Typography>
      </Box>

      <Box component="form" autoComplete="disabled" action={formAction}>
        <Stack gap={2}>
          <TextField
            label="Full Name"
            name="name"
            required
            fullWidth
            helperText="Enter your first name"
          />

          <TextField
            label="Username"
            name="username"
            required
            fullWidth
            error={state?.message?.includes("Username")}
            helperText={
              state?.message?.includes("Username")
                ? state?.message
                : "Enter your username"
            }
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            error={state?.message?.includes("Email")}
            helperText={
              state?.message?.includes("Email")
                ? state?.message
                : "Enter your email"
            }
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            required
            error={state?.message?.includes("Password")}
            helperText={
              state?.message?.includes("Password")
                ? state?.message
                : "Enter your password"
            }
          />
          <TextField
            label="Re-enter Password"
            name="repassword"
            type="password"
            required
            error={state?.message?.includes("Password")}
            helperText={
              state?.message?.includes("Password")
                ? state?.message
                : "Enter your password again"
            }
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            gap={2}
          >
            <Stack direction="row" gap={0.3}>
              <Typography variant="caption">
                Already have an account?
              </Typography>
              <Typography
                variant="caption"
                component={Link}
                href={"/login"}
                sx={{ textDecoration: "none", color: "blue" }}
              >
                Login.
              </Typography>
            </Stack>

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "unset" }}>
              <SubmitBtn title="Sign Up" />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUpAuthForm;

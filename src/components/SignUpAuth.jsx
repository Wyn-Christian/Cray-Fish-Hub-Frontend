import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";

const SignUpAuth = () => {
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

      <Box component="form" autoComplete="disabled">
        <Stack gap={2}>
          <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
            <TextField
              label="First Name"
              name="first_name"
              required
              fullWidth
              helperText="Enter your first name"
            />
            <TextField
              label="Last Name"
              name="last_name"
              required
              fullWidth
              helperText="Enter your last name"
            />
          </Stack>

          <TextField
            label="Username"
            name="username"
            required
            helperText="Enter your username"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            helperText="Enter your email"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            required
            helperText="Enter your password"
          />
          <TextField
            label="Re-enter Password"
            name="repassword"
            type="password"
            required
            helperText="Enter your password again"
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
              <Button variant="contained" fullWidth>
                Sign Up
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUpAuth;

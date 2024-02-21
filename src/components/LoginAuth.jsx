import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";

const LoginAuth = () => {
  return (
    <Box>
      <Box mb={4}>
        <Typography
          variant="body1"
          textTransform="uppercase"
          fontWeight={500}
          color="#677788"
        >
          Login
        </Typography>
        <Typography variant="h4">Welcome Back</Typography>
        <Typography variant="body1" color="#677788">
          Please enter your email and password...
        </Typography>
      </Box>

      <Box component="form">
        <Stack gap={2}>
          <TextField label="Email" required helperText="Enter your email" />
          <TextField
            label="Password"
            type="password"
            required
            helperText="Enter your password"
          />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            gap={2}
          >
            <Stack direction="row" gap={0.3}>
              <Typography variant="caption">
                Don't have an account yet?
              </Typography>
              <Typography
                variant="caption"
                component={Link}
                href={"/sign-up"}
                sx={{ textDecoration: "none", color: "blue" }}
              >
                Sign up here
              </Typography>
            </Stack>

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "unset" }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginAuth;

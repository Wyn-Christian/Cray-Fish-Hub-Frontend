import LoginAuth from "@/components/LoginAuth";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        m: "0px auto",
        px: 2,
        py: [4, 6, 8],
        maxWidth: { md: 1236 },
        height: "100%",
      }}
    >
      <Grid container>
        <Grid xs={12} md={6}>
          <LoginAuth />
        </Grid>

        <Grid xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box height="100%" width="100%" position="relative">
            <Image
              src="/assets/login-illustration.svg"
              alt="Login Illustration"
              fill
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;

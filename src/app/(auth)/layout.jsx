import ClientNavBar from "@/components/ClientNavbar";
import { Box } from "@mui/material";

const AuthLayout = ({ children }) => {
  return (
    <Box>
      <ClientNavBar />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          minHeight: "calc(-247px + 100vh)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;

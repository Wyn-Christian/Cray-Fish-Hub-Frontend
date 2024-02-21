import ClientNavBar from "@/components/ClientNavbar";
import { Box } from "@mui/material";

const ClientLayout = ({ children }) => {
  return (
    <Box>
      <ClientNavBar />

      <Box minHeight="200vh">{children}</Box>
    </Box>
  );
};

export default ClientLayout;

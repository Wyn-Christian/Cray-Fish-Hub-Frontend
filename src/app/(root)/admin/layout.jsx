import { Box } from "@mui/material";

import navbarsize from "@/constants/navbarsize";

import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardNavBar from "@/components/admin/DashboardNavBar";

const AdminDashboardLayout = ({ children }) => {
  return (
    <Box>
      <DashboardHeader />
      <Box
        display="flex"
        minHeight="100%"
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <DashboardNavBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            py: 11,
            px: [1, 2],
            width: { lg: `calc(100% - ${navbarsize.sidebar}px)` },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboardLayout;

import { cookies } from "next/headers";
import { Box } from "@mui/material";

import navbarsize from "@/constants/navbarsize";

import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardNavBar from "@/components/admin/DashboardNavBar";
import { getAdminDetail } from "@/actions/admin/account";

const AdminDashboardLayout = async ({ children }) => {
  let userId = cookies().get("currentUser").value;
  let user = await getAdminDetail(userId);

  return (
    <Box>
      <DashboardHeader user={user} />
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

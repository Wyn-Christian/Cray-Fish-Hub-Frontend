import { getProfileDetail } from "@/actions/users/account";
import ClientNavBar from "@/components/ClientNavbar";
import { Box } from "@mui/material";
import { cookies } from "next/headers";

const ClientLayout = async ({ children }) => {
  let isLogin = cookies().get("currentUser")?.value;
  let user;

  if (isLogin) {
    user = await getProfileDetail(isLogin);
  }

  return (
    <Box>
      <ClientNavBar isLogin={isLogin} user={user} />

      <Box minHeight="100vh">{children}</Box>
    </Box>
  );
};

export default ClientLayout;

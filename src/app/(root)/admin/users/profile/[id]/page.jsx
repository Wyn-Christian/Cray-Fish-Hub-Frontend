import { Box, Container } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import UserProfile from "@/ui/dashboard/users/UserProfile";
import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";

const links = [
  {
    title: "Dashboard",
    route: "/admin",
  },
  {
    title: "User",
    route: "/admin/users/list",
  },
  {
    title: "Soo Chaeyoung",
  },
];

const edit_user_btn = {
  title: "Edit",
  icon: <EditIcon />,
  route: "/admin/users/edit/123",
};

const UserProfilePage = () => {
  return (
    <Container>
      <DashboardBreadcrumbs title="Profile" links={links} btn={edit_user_btn} />

      <UserProfile />
    </Container>
  );
};

export default UserProfilePage;

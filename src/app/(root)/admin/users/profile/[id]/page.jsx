import { Box, Container } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import UserProfile from "@/ui/dashboard/users/UserProfile";
import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import { getUserDetail } from "@/actions/admin/users";

const UserProfilePage = async ({ params }) => {
  let user = await getUserDetail(params.id);
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
      title: user.name,
    },
  ];

  const edit_user_btn = {
    title: "Edit",
    icon: <EditIcon />,
    route: `/admin/users/edit/${params.id}`,
  };
  return (
    <Container>
      <DashboardBreadcrumbs title="Profile" links={links} btn={edit_user_btn} />

      <UserProfile user={user} />
    </Container>
  );
};

export default UserProfilePage;

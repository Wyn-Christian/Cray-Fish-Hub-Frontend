import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import UserEditForm from "@/ui/dashboard/users/UserEditForm";
import { getUserDetail } from "@/actions/admin/users";

const UserEditPage = async ({ params }) => {
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
  return (
    <Container>
      <DashboardBreadcrumbs title="Edit" links={links} />

      <UserEditForm user={user} />
    </Container>
  );
};

export default UserEditPage;

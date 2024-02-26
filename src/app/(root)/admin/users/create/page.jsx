import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import UserCreateForm from "@/ui/dashboard/users/UserCreateForm";

const links = [
  {
    title: "Dashboard",
    route: "/admin",
  },
  {
    title: "Users",
    route: "/admin/users/list",
  },
  {
    title: "New User",
  },
];

const UserCreatePage = () => {
  return (
    <Container>
      <DashboardBreadcrumbs title="Create a new user" links={links} />

      <UserCreateForm />
    </Container>
  );
};
export default UserCreatePage;

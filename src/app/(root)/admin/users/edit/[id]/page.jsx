import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import UserEditForm from "@/ui/dashboard/users/UserEditForm";

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

const UserEditPage = () => {
  return (
    <Container>
      <DashboardBreadcrumbs title="Edit" links={links} />

      <UserEditForm />
    </Container>
  );
};

export default UserEditPage;

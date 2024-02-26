import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ThreadsCreateForm from "@/ui/dashboard/threads/ThreadsCreateForm";

const links = [
  {
    title: "Dashboard",
    route: "/admin",
  },
  {
    title: "Forums",
    route: "/admin/forums/list",
  },
  {
    title: "Create",
  },
];

const ForumCreatePage = () => {
  return (
    <Container>
      <DashboardBreadcrumbs title="Create a new thread" links={links} />

      <ThreadsCreateForm />
    </Container>
  );
};
export default ForumCreatePage;

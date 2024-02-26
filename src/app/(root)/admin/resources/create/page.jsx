import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ResourcesCreateForm from "@/ui/dashboard/resources/ResourcesCreateForm";

const links = [
  {
    title: "Dashboard",
    route: "/admin",
  },
  {
    title: "Resources",
    route: "/admin/resources/list",
  },
  {
    title: "Create",
  },
];

const ResourceCreatePage = () => {
  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="Upload a new resource" links={links} />

      <ResourcesCreateForm />
    </Container>
  );
};
export default ResourceCreatePage;

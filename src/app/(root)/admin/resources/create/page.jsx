import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ResourcesCreateForm from "@/ui/dashboard/resources/ResourcesCreateForm";
import { getCurrentUser } from "@/actions/admin/account";

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

const ResourceCreatePage = async () => {
  const user = await getCurrentUser();

  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="Upload a new resource" links={links} />

      <ResourcesCreateForm user={user} />
    </Container>
  );
};
export default ResourceCreatePage;

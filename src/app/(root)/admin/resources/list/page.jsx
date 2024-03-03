import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ResourcesList from "@/ui/dashboard/resources/ResourcesList";
import { getAllResources } from "@/actions/admin/resources";

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
    title: "List",
  },
];

const new_btn = {
  title: "New Resource",
  icon: <AddIcon />,
  route: "/admin/resources/create",
};

const ResourceListPage = async () => {
  const resources = await getAllResources();

  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="List" links={links} btn={new_btn} />

      <ResourcesList resources={resources.data} />
    </Container>
  );
};

export default ResourceListPage;

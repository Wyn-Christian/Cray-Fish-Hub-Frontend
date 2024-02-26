import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ResourcesList from "@/ui/dashboard/resources/ResourcesList";

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

const ResourceListPage = () => {
  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="List" links={links} btn={new_btn} />

      <ResourcesList />
    </Container>
  );
};

export default ResourceListPage;

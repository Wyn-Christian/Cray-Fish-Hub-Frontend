import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";

import ResourcesEditForm from "@/ui/dashboard/resources/ResourcesEditForm";

import { getResourcesDetails } from "@/actions/admin/resources";
import { Box, Container } from "@mui/material";

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
    title: "Edit",
  },
];

const ResourcesEditPage = async ({ params }) => {
  const resource = await getResourcesDetails(params.id);

  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DashboardBreadcrumbs title="Edit" links={links} />
      <ResourcesEditForm resource={resource} />;
    </Container>
  );
};

export default ResourcesEditPage;

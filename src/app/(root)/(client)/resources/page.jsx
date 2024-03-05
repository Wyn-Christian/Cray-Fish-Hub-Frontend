import Header from "@/components/Header";
import { Box, Container } from "@mui/material";

import ResourcesList from "@/ui/client/resources/ResourcesList";
import { getAllApprovedResources } from "@/actions/users/resources";

const ResourcesPage = async ({ searchParams }) => {
  const resources = await getAllApprovedResources(searchParams);

  return (
    <Box>
      <Header title="Resources" />

      <Container sx={{ mt: 3 }}>
        <ResourcesList resources={resources.data} />
      </Container>
    </Box>
  );
};

export default ResourcesPage;

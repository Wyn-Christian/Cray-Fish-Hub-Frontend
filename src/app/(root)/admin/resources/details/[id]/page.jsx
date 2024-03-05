import Link from "next/link";

import { Box, Button, Container, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteBtn from "@/components/DeleteBtn";
import ResourcesDetails from "@/ui/dashboard/resources/ResourcesDetails";

import { deleteResource, getResourcesDetails } from "@/actions/admin/resources";

const ResourceDetailsPage = async ({ params }) => {
  const resource = await getResourcesDetails(params.id);

  return (
    <Container sx={{ px: [0, 2] }}>
      <Box mb={{ xs: 3, md: 5 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            disableRipple
            startIcon={<ArrowBackIosIcon />}
            size="large"
            LinkComponent={Link}
            href="/admin/resources/list"
          >
            Back
          </Button>
          <DeleteBtn
            id={params.id}
            href="/admin/resources/list"
            action={deleteResource}
            title="Confirm Resource Deletion"
          />
        </Stack>
      </Box>

      <ResourcesDetails {...resource} />
    </Container>
  );
};

export default ResourceDetailsPage;

import Link from "next/link";

import { Box, Button, Container, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ResourcesDetails from "@/ui/dashboard/resources/ResourcesDetails";

const ResourceDetailsPage = () => {
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
        </Stack>
      </Box>

      <ResourcesDetails />
    </Container>
  );
};

export default ResourceDetailsPage;

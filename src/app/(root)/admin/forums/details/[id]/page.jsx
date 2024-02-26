import Link from "next/link";

import { Box, Button, Container, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ThreadsDetails from "@/ui/dashboard/threads/ThreadsDetails";

const ForumDetailsPage = () => {
  return (
    <Container sx={{ p: [0, 2] }}>
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
            href="/admin/forums/list"
          >
            Back
          </Button>
        </Stack>
      </Box>

      <ThreadsDetails />
    </Container>
  );
};

export default ForumDetailsPage;

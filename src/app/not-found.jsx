import Link from "next/link";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const NotFound = async () => {
  return (
    <Container>
      <Stack
        sx={{
          py: 12,
          m: "auto",
          maxWidth: 400,
          minHeight: "100vh",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Sorry, Page Not Found!</Typography>
        <Typography variant="body1">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
        <Box sx={{ position: "relative", width: "100%", height: 450 }}>
          <Image
            src="/assets/404-illustration.svg"
            alt="404 error illustration"
            fill
          />
        </Box>
        <Button
          LinkComponent={Link}
          href="/"
          sx={{
            textDecoration: "none",
            width: ["100%", 150],
            p: 1,
            alignSelf: "center",
          }}
          variant="contained"
        >
          Go to home
        </Button>
      </Stack>
    </Container>
  );
};

export default NotFound;

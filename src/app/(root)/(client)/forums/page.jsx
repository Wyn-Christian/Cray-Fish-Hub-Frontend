import Link from "next/link";
import { Box, Container, Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import Header from "@/components/Header";
import ProfileLink from "@/components/ProfileLink";

const ThreadPaper = ({ author, title, date_created }) => {
  return (
    <Stack
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        "&:hover": {
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
      }}
    >
      <Stack gap={1} p={3} bgcolor="#fee9d1">
        <Stack
          component={Link}
          href="/forums/thread/123"
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              "& .MuiTypography-h6": {
                textDecoration: "underline",
              },
            },
          }}
        >
          <Typography variant="h6">Thread Sample Title</Typography>
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            Category
          </Typography>
        </Stack>

        <ProfileLink
          href="/profile/123"
          src="/assets/profile/pic-1.jpg"
          name="Thread Author"
          date="Feb 12, 2024"
        />
      </Stack>
    </Stack>
  );
};

const ForumsPage = () => {
  return (
    <Box>
      <Header title="Forums" />

      <Container sx={{ mt: 3 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
          <ThreadPaper />
          <ThreadPaper />
          <ThreadPaper />
          <ThreadPaper />
        </Masonry>
      </Container>
    </Box>
  );
};

export default ForumsPage;

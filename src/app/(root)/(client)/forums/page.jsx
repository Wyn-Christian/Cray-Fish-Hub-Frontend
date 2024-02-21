import Header from "@/components/Header";
import { Box, Container, Stack, Typography, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const ThreadPaper = ({ author, title, date_created }) => {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Stack
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Stack gap={1} p={3} bgcolor="#fee9d1">
          <Box
            sx={{
              lineHeight: 1.5,
              fontWeight: 400,
              color: "#919eab",
              fontSize: "0.75rem",
            }}
          >
            18 Feb 2024
          </Box>

          <Stack
            component={Link}
            href="/forums/thread/123"
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography
              variant="h6"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              Thread Sample Title
            </Typography>
            <Typography variant="subtitle2" fontWeight={600} color="#585858">
              Category
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{ alignItems: "center", pt: 1.5, color: "#212b36" }}
          >
            <Avatar
              src="/assets/profile/pic-2.jpg"
              alt="Article Author"
              sx={{ mr: 1 }}
            />
            Thread Author
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

const ForumsPage = () => {
  return (
    <Box>
      <Header title="Forums" />

      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <ThreadPaper />
          <ThreadPaper />
          <ThreadPaper />
          <ThreadPaper />
        </Grid>
      </Container>
    </Box>
  );
};

export default ForumsPage;

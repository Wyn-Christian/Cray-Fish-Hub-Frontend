import Header from "@/components/Header";
import { Box, Container, Stack, Typography, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";

const ArticlePaper = ({ title, content, authorId }) => {
  return (
    <Grid xs={12} md={6} lg={4}>
      <Stack
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          height: "100%",
        }}
      >
        <Stack
          gap={1}
          p={3}
          bgcolor="#fee9d1"
          height="100%"
          justifyContent="space-between"
        >
          <Stack gap={0.5}>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                lineHeight: 1.5,
                fontWeight: 400,
                color: "#919eab",
                fontSize: "0.75rem",
              }}
            >
              18 Feb 2024
              <Box
                mx={1}
                width={4}
                height={4}
                borderRadius="50%"
                bgcolor="currentcolor"
              />
              5 minutes read
            </Stack>

            <Box
              component={Link}
              href="/articles/123"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Typography variant="h5">{title}</Typography>
            </Box>

            <Typography
              variant="body2"
              color="#637381"
              fontWeight={400}
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 3, // Number of lines to show
                WebkitBoxOrient: "vertical",
              }}
            >
              {content}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{ alignItems: "center", pt: 1.5, color: "#212b36" }}
          >
            <Avatar
              src="/assets/profile/pic-6.jpg"
              alt="Article Author"
              sx={{ mr: 1 }}
            />
            Article Author
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

const ArticlesPage = () => {
  return (
    <Box>
      <Header title="Articles" />

      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <ArticlePaper
            title="sample 1"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores repellendus non accusantium impedit similique, nisi voluptas adipisci, iste iusto cumque quaerat doloremque ipsum vero ea, dolorum temporibus illo sed commodi."
          />
          <ArticlePaper
            title="sample 1"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores repellendus non accusantium impedit similique, "
          />
          <ArticlePaper
            title="sample 1"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </Grid>
      </Container>
    </Box>
  );
};
export default ArticlesPage;

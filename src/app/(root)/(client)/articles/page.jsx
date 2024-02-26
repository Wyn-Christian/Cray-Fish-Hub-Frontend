import Header from "@/components/Header";
import ProfileLink from "@/components/ProfileLink";
import {
  Box,
  Container,
  Stack,
  Typography,
  Avatar,
  ListItemText,
} from "@mui/material";
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
          "&:hover": {
            boxShadow:
              "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
          },
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

          <ProfileLink
            href="/profile/123"
            src="/assets/profile/pic-1.jpg"
            name="Article Author"
            date="Feb 23, 2024"
          />
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

import DisplayContent from "@/components/DisplayContent";
import articleSample from "@/constants/articleSample";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ArticleHeader = () => (
  <Box
    sx={{
      position: "relative",
      backgroundImage: "linear-gradient(7deg, #ffffff 20%, #fd874c 100%);",
      pt: 14,
      mt: -14,
      width: "100%",
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        width: "100%",
        m: "0 auto",
        px: 2,
        py: {
          xs: 4,
          sm: 6,
          md: 8,
        },
      }}
    >
      <Stack gap={3}>
        <Typography variant="h2">[Article Title]</Typography>

        <Stack gap={2} direction="row" alignItems="center">
          <Avatar
            src="/assets/profile/pic-6.jpg"
            sx={{ width: 50, height: 50 }}
          />
          <ListItemText
            primaryTypographyProps={{ variant: "h6" }}
            primary="Article Name"
            secondary="November 24, 2001"
          />
        </Stack>
      </Stack>
    </Container>
  </Box>
);

const ArticleComment = () => (
  <Stack direction="row" gap={1}>
    <Avatar alt="User Profile" src="/assets/profile/pic-5.jpg" />
    <Stack>
      <Typography variant="subtitle2">[Comment Author]</Typography>
      <Typography variant="caption" color="#919eab">
        12 Feb 2024
      </Typography>
      <Typography variant="body2" my={1}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        sapiente harum libero perferendis corrupti saepe quas ratione provident
        aspernatur quo?
      </Typography>
      <Divider />
    </Stack>
  </Stack>
);

const ArticleDetailPage = () => {
  return (
    <Box>
      <ArticleHeader />

      <Container maxWidth="sm" sx={{ mt: 3 }}>
        <Stack gap={3}>
          <Box>
            <DisplayContent content={articleSample} />
          </Box>

          <Divider />

          <Stack direction="row">
            <Typography variant="h5">Comments</Typography>
            <Typography variant="subtitle2" color="#919eab">
              (3)
            </Typography>
          </Stack>

          <Stack gap={2}>
            <TextField
              multiline
              label="Write some of your comments..."
              minRows={3}
              maxRows={10}
            />
            <Box alignSelf="flex-end">
              <Button variant="contained" size="small">
                Post Comment
              </Button>
            </Box>
          </Stack>

          <Divider />

          <Stack gap={2}>
            <ArticleComment />
            <ArticleComment />
            <ArticleComment />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ArticleDetailPage;

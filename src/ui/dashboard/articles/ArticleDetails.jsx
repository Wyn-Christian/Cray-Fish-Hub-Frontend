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

import ArticleComment from "@/components/ArticleComment";
import DisplayContent from "@/components/DisplayContent";
import articleSample from "@/constants/articleSample";

const HeaderSection = () => {
  return (
    <>
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
    </>
  );
};

const ArticleDetails = () => {
  return (
    <Container maxWidth="sm">
      <Stack gap={3}>
        <HeaderSection />

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
  );
};

export default ArticleDetails;

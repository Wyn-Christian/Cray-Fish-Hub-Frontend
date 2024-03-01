import moment from "moment";

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
import CreateArticleComment from "@/components/admin/CreateArticleComment";

const HeaderSection = ({ title, author, createdAt }) => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>

      <Stack gap={2} direction="row" alignItems="center">
        <Avatar
          src={author?.name}
          alt={author?.name}
          sx={{ width: 50, height: 50 }}
        />
        <ListItemText
          primaryTypographyProps={{ variant: "h6" }}
          primary={author?.name}
          secondary={moment(createdAt).format("MMM DD, YYYY")}
        />
      </Stack>
    </>
  );
};

const ArticleDetails = ({
  _id,
  title,
  content,
  author,
  createdAt,
  comments,
}) => {
  return (
    <Container maxWidth="sm">
      <Stack gap={3}>
        <HeaderSection title={title} author={author} createdAt={createdAt} />

        <Box>
          <DisplayContent content={content} />
        </Box>

        <Divider />

        <Stack direction="row">
          <Typography variant="h5">Comments</Typography>
          {!!comments.length && (
            <Typography variant="subtitle2" color="#919eab">
              ({comments.length})
            </Typography>
          )}
        </Stack>

        <CreateArticleComment articleId={_id} />

        <Divider />

        <Stack gap={2}>
          {!!comments.length &&
            comments.map((comment) => (
              <ArticleComment key={comment._id} {...comment} />
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ArticleDetails;

import moment from "moment";
import Link from "next/link";

import {
  Avatar,
  Box,
  Container,
  Divider,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import ArticleComment from "@/components/ArticleComment";
import CreateArticleComment from "@/components/CreateArticleComment";
import DisplayContent from "@/components/DisplayContent";

const ArticleHeader = ({ title, author, createdAt }) => (
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
        <Typography variant="h2">{title}</Typography>

        <Stack gap={2} direction="row" alignItems="center">
          <Avatar
            alt={author?.name}
            src={author?.profilePath || "/assets/profile/img-1.png"}
            sx={{ width: 50, height: 50 }}
          />
          <ListItemText
            primaryTypographyProps={{
              variant: "h6",
              component: Link,
              href: `/profile/${author?._id}`,
              sx: {
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            }}
            primary={author?.name}
            secondary={moment(createdAt).format("MMM DD, YYYY")}
          />
        </Stack>
      </Stack>
    </Container>
  </Box>
);

const ArticleDetails = ({
  _id,
  title,
  content,
  author,
  createdAt,
  comments,
  commentDeletable = false,
  user,
}) => {
  return (
    <Box>
      <ArticleHeader title={title} author={author} createdAt={createdAt} />

      <Container maxWidth="sm" sx={{ mt: 3 }}>
        <Stack gap={3}>
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

          <CreateArticleComment articleId={_id} isLogin={user !== null} />

          <Divider />

          <Stack gap={2}>
            {!!comments.length &&
              comments.map((comment) => (
                <ArticleComment
                  key={comment._id}
                  {...comment}
                  deletable={
                    commentDeletable || comment.author._id === user?._id
                  }
                />
              ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ArticleDetails;

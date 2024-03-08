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
import DisplayContent from "@/components/DisplayContent";
import CreateArticleComment from "@/components/admin/CreateArticleComment";

const HeaderSection = ({ title, author, createdAt }) => {
  return (
    <>
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
            href: `/admin/users/profile/${author?._id}`,
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
              <ArticleComment
                key={comment._id}
                href={`/admin/users/profile/${comment?.author?._id}`}
                {...comment}
                deletable
              />
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ArticleDetails;

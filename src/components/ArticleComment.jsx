import { Avatar, Divider, Stack, Typography } from "@mui/material";
import moment from "moment";

const ArticleComment = ({ author, content, createdAt }) => (
  <Stack direction="row" gap={1}>
    <Avatar alt={author?.name} src={author?.name} />
    <Stack flexGrow={1}>
      <Typography variant="subtitle2">{author?.name}</Typography>
      <Typography variant="caption" color="#919eab">
        {moment(createdAt).fromNow()}
      </Typography>
      <Typography variant="body2" my={1}>
        {content}
      </Typography>
      <Divider />
    </Stack>
  </Stack>
);

export default ArticleComment;

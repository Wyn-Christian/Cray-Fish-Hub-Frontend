import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";

const ArticleComment = ({ author, content, createdAt }) => (
  <Stack direction="row" gap={1}>
    <Box
      component={Link}
      href={`/profile/${author._id}`}
      sx={{ textDecoration: "none" }}
    >
      <Avatar
        alt={author?.name}
        src={author?.profilePath || "/assets/profile/img-1.png"}
      />
    </Box>
    <Stack flexGrow={1}>
      <Box
        component={Link}
        href={`/profile/${author._id}`}
        sx={{
          textDecoration: "none",
          color: "inherit",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography variant="subtitle2">{author?.name}</Typography>
      </Box>
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

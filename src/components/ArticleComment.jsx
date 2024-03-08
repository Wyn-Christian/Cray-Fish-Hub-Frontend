import moment from "moment";
import Link from "next/link";

import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import DeleteBtn from "./DeleteBtn";
import { deleteArticleComment } from "@/actions/admin/articles";

const ArticleComment = ({
  _id,
  author,
  content,
  createdAt,
  isDeletable = false,
}) => {
  return (
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
        <Stack direction="row" justifyContent="space-between">
          <Box>
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
          </Box>
          {isDeletable && (
            <DeleteBtn
              title="Delete this comment?"
              action={deleteArticleComment}
              id={_id}
              iconOnly={true}
            />
          )}
        </Stack>
        <Typography variant="body2" my={1}>
          {content}
        </Typography>
        <Divider />
      </Stack>
    </Stack>
  );
};

export default ArticleComment;

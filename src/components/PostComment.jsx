import moment from "moment";
import BadWordsFilter from "bad-words";

import {
  Avatar,
  Box,
  Divider,
  Fade,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DeleteBtn from "./DeleteBtn";
import { deletePostComment } from "@/actions/admin/forums";

const PostComment = ({
  _id,
  content,
  createdAt,
  author,
  deletable = false,
}) => {
  let filter = new BadWordsFilter();
  return (
    <Fade in>
      <Paper sx={{ pt: 1, height: "100%" }} elevation={0}>
        <Stack gap={1} direction="row">
          <Stack alignItems="center" gap={0.5}>
            <Avatar
              alt={author?.name}
              src={author?.profilePath || "/assets/profile/img-1.png"}
              sx={{ width: 50, height: 50 }}
            />
            <Box height="100%">
              <Divider orientation="vertical" />
            </Box>
          </Stack>

          <Stack width="100%">
            <Stack direction="row" justifyContent="space-between">
              <Stack justifyContent="center">
                <Stack
                  direction={["column", "row"]}
                  alignItems={{ sm: "center" }}
                  gap={[0, 1]}
                >
                  <Typography variant="subtitle2">{author?.name}</Typography>

                  <Box
                    width={4}
                    height={4}
                    borderRadius="50%"
                    bgcolor="#333"
                    display={["none", "block"]}
                  />

                  <Typography variant="caption" color="#888">
                    {moment(createdAt).fromNow()}
                  </Typography>
                </Stack>
              </Stack>
              {deletable && (
                <DeleteBtn
                  id={_id}
                  title="Delete this post comment?"
                  action={deletePostComment}
                  iconOnly
                />
              )}
            </Stack>
            <Typography variant="body1">{filter.clean(content)}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Fade>
  );
};

export default PostComment;

import { Avatar, Divider, Stack, Typography } from "@mui/material";

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

export default ArticleComment;

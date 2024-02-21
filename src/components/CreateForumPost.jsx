import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

const CreateForumPost = () => {
  return (
    <Paper sx={{ m: 1, p: 2, border: "1px solid #999" }} elevation={0}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={2}
        alignItems={["flex-end", "center"]}
      >
        <Avatar
          src="/assets/profile/pic-3.jpg"
          sx={{ width: 50, height: 50, display: ["none", "inline-flex"] }}
        />

        <TextField multiline label="Add a post..." fullWidth minRows={3} />
        <Button variant="contained" size="small" sx={{ minWidth: 100 }}>
          Post
        </Button>
      </Stack>
    </Paper>
  );
};

export default CreateForumPost;

import { Avatar, Button, Fade, Paper, Stack, TextField } from "@mui/material";

const CreateComment = () => {
  return (
    <Fade in>
      <Paper sx={{ pb: 1 }} elevation={0}>
        <Stack
          direction={["column", "row"]}
          gap={2}
          alignItems={["flex-end", "center"]}
        >
          <Avatar
            alt="user"
            src="/assets/profile/pic-3.jpg"
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          />
          <TextField multiline label="Add a comment..." fullWidth />
          <Button variant="contained" size="small" sx={{ minWidth: 100 }}>
            Comment
          </Button>
        </Stack>
      </Paper>
    </Fade>
  );
};

export default CreateComment;

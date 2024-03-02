import { Box, Container } from "@mui/material";

import Header from "@/components/Header";
import ThreadsList from "@/ui/client/forums/ThreadsList";
import { getAllThreads } from "@/actions/users/forums";

const ForumsPage = async () => {
  const threads = await getAllThreads();

  return (
    <Box>
      <Header title="Forums" />

      <ThreadsList threads={threads.data} />
    </Box>
  );
};

export default ForumsPage;

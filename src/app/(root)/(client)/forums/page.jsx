import { Box, Container } from "@mui/material";

import Header from "@/components/Header";
import ThreadsList from "@/ui/client/forums/ThreadsList";
import { getAllThreads } from "@/actions/users/forums";

const ForumsPage = async ({ searchParams }) => {
  const threads = await getAllThreads(searchParams);

  return (
    <Box>
      <Header title="Forums" />

      <ThreadsList threads={threads.data} />
    </Box>
  );
};

export default ForumsPage;

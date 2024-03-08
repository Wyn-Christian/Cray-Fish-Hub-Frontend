import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";

import { getThreadDetails } from "@/actions/admin/forums";
import ThreadsEditForm from "@/ui/dashboard/threads/ThreadsEditForm";

const links = [
  {
    title: "Dashboard",
    route: "/admin",
  },
  {
    title: "Forums",
    route: "/admin/forums/list",
  },
  {
    title: "Edit",
  },
];

const ForumEditPage = async ({ params }) => {
  const thread = await getThreadDetails(params.id);

  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DashboardBreadcrumbs title="Edit" links={links} />

      <ThreadsEditForm thread={thread} />
    </Container>
  );
};

export default ForumEditPage;

import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import ThreadsList from "@/ui/dashboard/threads/ThreadsList";
import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";

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
    title: "List",
  },
];

const new_user_btn = {
  title: "New Thread",
  icon: <AddIcon />,
  route: "/admin/forums/create",
};

const ForumListPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DashboardBreadcrumbs title="List" links={links} btn={new_user_btn} />

      <ThreadsList />
    </Container>
  );
};

export default ForumListPage;

import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ArticleList from "@/ui/dashboard/articles/ArticleList";

const links = [
  {
    title: "Dashboard",
    route: "/admin",
  },
  {
    title: "Articles",
    route: "/admin/articles/list",
  },
  {
    title: "List",
  },
];

const new_user_btn = {
  title: "New Article",
  icon: <AddIcon />,
  route: "/admin/articles/create",
};

const ArticleListPage = () => {
  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="List" links={links} btn={new_user_btn} />

      <ArticleList />
    </Container>
  );
};

export default ArticleListPage;

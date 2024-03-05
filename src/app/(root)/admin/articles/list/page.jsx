import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ArticleList from "@/ui/dashboard/articles/ArticleList";
import { getAllArticles } from "@/actions/admin/articles";

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

const ArticleListPage = async ({ searchParams }) => {
  const result = await getAllArticles(searchParams);

  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="List" links={links} btn={new_user_btn} />

      <ArticleList articles={result.data} />
    </Container>
  );
};

export default ArticleListPage;

import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ArticleCreateForm from "@/ui/dashboard/articles/ArticleCreateForm";

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
    title: "New Article",
  },
];

const ArticleCreatePage = () => {
  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="Create a new article" links={links} />

      <ArticleCreateForm />
    </Container>
  );
};
export default ArticleCreatePage;

import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ArticlesEditForm from "@/ui/dashboard/articles/ArticlesEditForm";

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
    title: "Article Title",
  },
];

const ArticleEditPage = () => {
  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="Edit" links={links} />

      <ArticlesEditForm />
    </Container>
  );
};

export default ArticleEditPage;

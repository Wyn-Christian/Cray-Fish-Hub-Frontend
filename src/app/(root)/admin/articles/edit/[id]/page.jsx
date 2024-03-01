import { Container } from "@mui/material";

import DashboardBreadcrumbs from "@/components/admin/DashboardBreadcrumbs";
import ArticlesEditForm from "@/ui/dashboard/articles/ArticlesEditForm";
import { getArticleDetail } from "@/actions/admin/articles";

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

const ArticleEditPage = async ({ params }) => {
  const article = await getArticleDetail(params.id);

  return (
    <Container sx={{ px: [0, 2] }}>
      <DashboardBreadcrumbs title="Edit" links={links} />

      <ArticlesEditForm article={article} />
    </Container>
  );
};

export default ArticleEditPage;

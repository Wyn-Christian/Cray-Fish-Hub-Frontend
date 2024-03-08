import { Box } from "@mui/material";
import ArticleDetails from "@/ui/client/articles/ArticleDetails";
import { getArticleComments, getArticleDetail } from "@/actions/admin/articles";
import { isUserLogin } from "@/actions/users/account";
import { getCurrentUser } from "@/actions/admin/account";

const ArticleDetailPage = async ({ params }) => {
  let article = await getArticleDetail(params.id);
  let comments = await getArticleComments(params.id);
  let user = await getCurrentUser();

  let isLogin = isUserLogin();

  return (
    <Box mb={30}>
      <ArticleDetails
        {...article}
        comments={comments}
        isLogin={isLogin}
        user={user}
      />
    </Box>
  );
};

export default ArticleDetailPage;

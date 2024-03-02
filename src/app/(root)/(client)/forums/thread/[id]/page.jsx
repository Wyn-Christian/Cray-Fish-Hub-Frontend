import { getCurrentUser } from "@/actions/admin/account";
import { getAllPostsByThreads, getThreadDetails } from "@/actions/admin/forums";
import ThreadDetails from "@/ui/client/forums/ThreadDetails";

const ThreadPostsPage = async ({ params }) => {
  const { author, ...thread } = await getThreadDetails(params.id);
  const posts = await getAllPostsByThreads(params.id);
  const user = await getCurrentUser();

  return (
    <ThreadDetails thread={thread} author={author} posts={posts} user={user} />
  );
};

export default ThreadPostsPage;

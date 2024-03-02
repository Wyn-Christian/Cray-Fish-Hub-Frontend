import { getCurrentUser } from "@/actions/admin/account";
import { getAllThreadsByUser } from "@/actions/users/forums";
import UserDetails from "@/ui/client/profile/UserDetails";

const UserSettingsPage = async () => {
  const user = await getCurrentUser();
  const threads = await getAllThreadsByUser(user._id);

  return <UserDetails user={user} threads={threads.data} />;
};

export default UserSettingsPage;

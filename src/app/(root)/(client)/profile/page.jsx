import { getCurrentUser } from "@/actions/admin/account";
import { getAllThreadsByUser } from "@/actions/users/forums";

import ProfileDetails from "@/ui/client/profile/ProfileDetails";

const UserProfile = async () => {
  const user = await getCurrentUser();
  const threads = await getAllThreadsByUser(user._id);

  return <ProfileDetails user={user} threads={threads} />;
};

export default UserProfile;

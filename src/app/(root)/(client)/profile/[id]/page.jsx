import { getProfileDetail } from "@/actions/users/account";
import { getAllThreadsByUser } from "@/actions/users/forums";
import ProfileDetails from "@/ui/client/profile/ProfileDetails";

const UserProfile = async ({ params }) => {
  const user = await getProfileDetail(params.id);
  const threads = await getAllThreadsByUser(params.id);
  return <ProfileDetails user={user} threads={threads} />;
};

export default UserProfile;

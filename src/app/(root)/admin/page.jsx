import { adminOverview } from "@/actions/admin/users";
import AdminOverview from "@/ui/dashboard/AdminOverview";

const AdminPage = async () => {
  const data = await adminOverview();

  return <AdminOverview data={data} />;
};

export default AdminPage;

import { getUserDetails } from "@/actions";
import DashboardLayout from "@/components/ui/dashboard_layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userExit = await getUserDetails(user?.id);

  if (userExit) {
    return <DashboardLayout user={userExit} />;
  } else {
    redirect("/onboard");
  }
}

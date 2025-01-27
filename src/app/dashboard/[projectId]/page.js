import { getUserDetails } from "@/actions";
import ProjectDetailsPage from "@/components/ui/dashboard_layout/projectpage_layout/project_details";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProjectPage() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userExit = await getUserDetails(user?.id);

  if (userExit) {
    return <ProjectDetailsPage></ProjectDetailsPage>;
  } else {
    redirect("/onboard");
  }
}

import { getProjectDetails, getUserDetails } from "@/actions";
import Custom404 from "@/app/not-found";

import ProjectDetailsPage from "@/components/ui/dashboard_layout/projectpage_layout/project_details";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProjectPage({ params }) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userExit = await getUserDetails(user?.id);

  const { id } = await params;
  const details = await getProjectDetails(id);

  if (userExit) {
    return (
      <>
        {details ? (
          <ProjectDetailsPage
            user={userExit}
            Projectdetails={details}
          ></ProjectDetailsPage>
        ) : (
          <>
            <div className="text-center text-3xl text-white">
              Project not found !
              <Custom404 />
            </div>
          </>
        )}
      </>
    );
  } else {
    redirect("/onboard");
  }
}

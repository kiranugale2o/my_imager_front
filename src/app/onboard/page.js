import { getUserDetails } from "@/actions";
import OnboardPage from "@/components/ui/onboard_layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Onboard() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const userExit = await getUserDetails(user?.id);
  if (userExit) {
    redirect("/");
  }

  return (
    <div className="lg:py-20">
      <OnboardPage user={user} />
    </div>
  );
}

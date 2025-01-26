import OnboardPage from "@/components/ui/onboard_layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Onboard() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <OnboardPage user={user} />
    </>
  );
}

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  !isUserAuthenticated ? (
    redirect("http://localhost:3000/api/auth/login?")
  ) : (
    <>
      {" "}
      return (
      <>
        <h1>Dashboard</h1>
      </>
      );
    </>
  );
}

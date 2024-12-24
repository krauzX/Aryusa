import { redirect } from "next/navigation";
import { getToken } from "next-auth/jwt"; // Use getToken for session handling

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getToken({ req: { headers: {} } }); // Fetch the token/session

  if (!session) {
    redirect("/");
  }

  const email = session?.email;

  if (email) {
    const res = await fetch(`http://localhost:3001/api/users/email/${email}`);
    const data = await res.json();

    // Redirecting user to the home page if not admin
    if (data.role === "user") {
      redirect("/");
    }
  }

  return <>{children}</>;
}

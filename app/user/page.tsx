import NavBar from "@/components/ui/Navbar";
import UserDashboard from "@/components/userdashboard";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";

export default async function UserPage(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin") && !checkRole("moderator")) {
    redirect("/");
  }
  return (
    <div>
      <NavBar/>
      <div >
        <UserDashboard />
      </div>
    </div>
  );
};


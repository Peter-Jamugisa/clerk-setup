import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { SearchUsers } from "./_search-users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_actions";
import Admins from "@/components/admins";
import NavBar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = query
    ? (await clerkClient().users.getUserList({ query })).data
    : [];

  return (
    <>
      <NavBar />

      <div className="mt-28 pb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-red-700 flex justify-center md:justify-start">This is the admin dashboard</h1>
        <p className="text-lg font-bold flex text-center md:text-start">
          This page is restricted to users with the 'admin' role.
        </p>
      </div>
      <div>
        <SearchUsers />

        {users.map((user) => {
          return (
            <div key={user.id}>
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div>
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                  )?.emailAddress
                }
              </div>
              <div>{user.publicMetadata.role as string}</div>
              <div className="flex gap-4">
                <div>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="admin" name="role" />
                    <Button type="submit">Make Admin</Button>
                  </form>
                </div>
                <div>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="moderator" name="role" />
                    <Button type="submit">Make Moderator</Button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
        <Admins />
      </div>
    </>
  );
}

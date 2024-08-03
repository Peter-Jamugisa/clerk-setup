import Records from "@/components/record";
import NavBar from "@/components/ui/Navbar";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import React from "react";

export default async function Recordings(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin") && !checkRole("moderator")) {
    redirect("/");
  }
  return (
    <div>
      <NavBar />
      <div>
        <Records />
      </div>
    </div>
  );
}


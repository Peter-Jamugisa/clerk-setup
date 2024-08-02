"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const queryTerm = formData.get("search") as string;
          router.push(pathname + "?search=" + queryTerm);
        }}
      >
        <div className="flex flex-col items-center justify-center md:justify-start gap-5">
          <div className="flex flex-col items-center justify-center">
            <Label htmlFor="search" className="text-lg">Search for Users</Label>
            <Input id="search" name="search" type="text" />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

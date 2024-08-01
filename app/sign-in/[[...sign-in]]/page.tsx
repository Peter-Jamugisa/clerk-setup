import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-blue-900">
      <Link href="/home">
        <SignIn forceRedirectUrl={"/home"} routing="path" path="/sign-in"/>;
      </Link>
    </div>
  );
}

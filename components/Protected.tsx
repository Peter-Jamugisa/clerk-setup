import { checkRole } from "@/utils/roles";
import { Protect } from "@clerk/nextjs";


export default function ProtectedButton() {
  if (!checkRole("admin")) {
    return (
      <Protect>
        <button>Admin Action</button>
      </Protect>
    );
  }
}

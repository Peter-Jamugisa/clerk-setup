import NavBar from "@/components/ui/Navbar";
import UserDashboard from "@/components/userdashboard";

const UserPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <UserDashboard />
      </div>
    </div>
  );
};

export default UserPage;

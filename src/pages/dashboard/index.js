import Link from "next/link";
import privateRoute from "@/containers/PrivateRoute";

const Dashboard = () => {
  return (
    <div>
      <p>This is the dashboard section. <Link href="/dashboard/profile">View Your Profile</Link></p>
    </div>
  )
}

export default privateRoute(Dashboard);

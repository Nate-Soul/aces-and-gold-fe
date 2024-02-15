import privateRoute from "@/containers/PrivateRoute";
import ProfileForm from "@/components/ProfileForm";
import { ToastContainer } from "react-toastify";

const profile = () => {
  return (
    <>
      <main>
        <ToastContainer/>
        <ProfileForm/>    
      </main>
    </>
  )
}

export default privateRoute(profile);

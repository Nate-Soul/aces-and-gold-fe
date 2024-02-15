import MainHeader from "@/components/MainHeader";
import RegistrationForm from "@/components/subcomponents/RegistrationForm";
import EmailSub from "@/components/sections/EmailSub";
import MainFooter from "@/components/MainFooter";
import { ToastContainer } from "react-toastify";

const Register = () => {
  return (
    <>
      <MainHeader/>
      <main>
        <ToastContainer/>
        <RegistrationForm/>
        <EmailSub/>
      </main>
      <MainFooter/>
    </>
  )
}

export default Register

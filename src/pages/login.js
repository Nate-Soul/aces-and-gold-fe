import EmailSub from "@/components/sections/EmailSub";
import LoginForm from "@/components/subcomponents/LoginForm";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
  return (
    <>
      <MainHeader/>
      <main>
        <ToastContainer/>
        <LoginForm/>
        <EmailSub/>
      </main>
      <MainFooter/>
    </>
  )
}

export default LoginPage

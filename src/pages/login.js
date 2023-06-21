import EmailSub from "@/components/EmailSub";
import LoginForm from "@/components/LoginForm";
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";

const LoginPage = () => {
  return (
    <>
      <MainHeader/>
      <main>
        <LoginForm/>
        <EmailSub/>
      </main>
      <MainFooter/>
    </>
  )
}

export default LoginPage

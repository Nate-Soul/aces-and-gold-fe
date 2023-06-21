import MainHeader from "@/components/MainHeader";
import RegistrationForm from "@/components/RegistrationForm";
import EmailSub from "@/components/EmailSub";
import MainFooter from "@/components/MainFooter";

const Register = () => {
  return (
    <>
      <MainHeader/>
      <main>
        <RegistrationForm/>
        <EmailSub/>
      </main>
      <MainFooter/>
    </>
  )
}

export default Register

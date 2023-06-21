import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import GenericPageHeader from "@/components/GenericPageHeader";
import ContactUs from "@/components/ContactUs";
import { generateCrumbs } from "@/libs/breadCrumbs";
import EmailSub from "@/components/EmailSub";
import Appointment from "@/components/Appointment";

const Contact = () => {

  const crumbs = generateCrumbs("/contact");

  return (
    <>
    <MainHeader/>
    <main>
      <GenericPageHeader title="Contact Us" crumbs={crumbs}/>
      <ContactUs/>
      <Appointment/>
      <EmailSub/>
    </main>
    <MainFooter/>
    </>
  )
}

export default Contact

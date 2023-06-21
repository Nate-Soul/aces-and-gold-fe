import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import GenericPageHeader from "@/components/GenericPageHeader";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import { generateCrumbs } from "@/libs/breadCrumbs";

const About = () => {

  const crumbs = generateCrumbs("/about");

  return (
    <>
    <MainHeader/>
    <main>
      <GenericPageHeader title="About Us" crumbs={crumbs}/>
      <AboutUs/>
      <Services/>
      <WhyChooseUs/>
      <MissionVision/>
      <CoreValues/>
    </main>
    <MainFooter/>
    </>
  )
}

export default About

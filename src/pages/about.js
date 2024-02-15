import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import GenericPageHeader from "@/components/subcomponents/GenericPageHeader";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import MissionVision from "@/components/sections/MissionVision";
import CoreValues from "@/components/sections/CoreValues";
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

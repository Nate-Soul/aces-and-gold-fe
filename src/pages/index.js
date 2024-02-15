import MainHeader from "@/components/MainHeader";
import Hero from "@/components/sections/Hero";
import Appointment from "@/components/sections/Appointment";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import TrendingProducts from "@/components/sections/TrendingProducts";
import ShopByCollection from "@/components/sections/ShopByCollection";
import EmailSub from "@/components/sections/EmailSub";
import MainFooter from "@/components/MainFooter";
import Offers from "@/components/sections/Offers";

export default function Home() {

  return (
    <>
    <MainHeader/>
    <main className="flex flex-col min-h-screen">
      <Hero/>
      <Offers/>
      <FeaturedProducts/>
      <TrendingProducts/>
      <ShopByCollection type="jewelry" />
      <ShopByCollection type="watch" />
      <Appointment/>
      <EmailSub/>
    </main>
    <MainFooter/>
    </>
  )
}
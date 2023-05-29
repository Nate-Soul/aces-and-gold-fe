import Appointment from "@/components/Appointment";
import EmailSub from "@/components/EmailSub";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import MainFooter from "@/components/MainFooter";
import Navbar from "@/components/Navbar";
import NavbarTop from "@/components/NavbarTop";
import ShopByCategories from "@/components/ShopByCategories";
import TrendingProducts from "@/components/TrendingProducts";


export default function Home() {
  return (
    <>
    <header>
      <NavbarTop/>
      <Navbar/>
    </header>
    <main className="flex flex-col min-h-screen">
      <Hero/>
      <FeaturedProducts/>
      <ShopByCategories/>
      <TrendingProducts/>
      <Appointment/>
      <EmailSub/>
    </main>
    <MainFooter/>
    </>
  )
}
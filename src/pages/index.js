import MainHeader from "@/components/MainHeader";
import Hero from "@/components/Hero";
import Appointment from "@/components/Appointment";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrendingProducts from "@/components/TrendingProducts";
import ShopByCollection from "@/components/ShopByCollection";
import EmailSub from "@/components/EmailSub";
import MainFooter from "@/components/MainFooter";

//jewelry collection images
import catImage1 from "../media/images/products/f.jpg";
import catImage2 from "../media/images/products/g.jpg";
import catImage3 from "../media/images/products/h.png";
import catImage4 from "../media/images/products/c.jpg";
import catImage5 from "../media/images/products/b.png";
import catImage6 from "../media/images/products/h.png";
import catImage7 from "../media/images/products/i.jpg";
import catImage8 from "../media/images/products/j.jpg";
import catImage9 from "../media/images/products/e.jpg";
import catImage10 from "../media/images/products/d.jpg";

//watch collection images
import watchImage1 from "../media/images/products/m.PNG";
import watchImage2 from "../media/images/products/n.png";
import watchImage3 from "../media/images/products/o.png";
import watchImage4 from "../media/images/products/p.png";
import watchImage5 from "../media/images/products/q.png";
import watchImage6 from "../media/images/products/r.png";
import watchImage7 from "../media/images/products/s.png";
import watchImage8 from "../media/images/products/t.png";
import watchImage9 from "../media/images/products/u.png";
import watchImage10 from "../media/images/products/v.png";
import Offers from "@/components/Offers";

export default function Home() {

  const jewelryCollections = [
    {
      id: 1,
      name: "Men's",
      slug: "mens-jewelry",
      imageUrl: catImage1
    },
    {
      id: 2,
      name: "Gold",
      slug: "gold",
      imageUrl: catImage2
    },
    {
      id: 3,
      name: "Diamonds",
      slug: "diamonds",
      imageUrl: catImage3
    },
    {
      id: 4,
      name: "Pearl",
      slug: "pearl",
      imageUrl: catImage4
    },
    {
      id: 5,
      name: "Wedding & Engagements",
      slug: "wedding-engagements",
      imageUrl: catImage5
    },
    {
      id: 6,
      name: "Gemstone",
      slug: "gemstone",
      imageUrl: catImage6
    },
    {
      id: 7,
      name: "Bridal",
      slug: "bridal",
      imageUrl: catImage7
    },
    {
      id: 8,
      name: "Statement",
      slug: "statement",
      imageUrl: catImage8
    },
    {
      id: 9,
      name: "Antique & Vintage",
      slug: "antique-vintage",
      imageUrl: catImage9
    },
    {
      id: 10,
      name: "Personalized & Customized",
      slug: "personalized-customized",
      imageUrl: catImage10
    },
  ];

  const watchCollections = [
    {
      id: 1,
      name: "Luxury Watches",
      slug: "luxury-watches",
      imageUrl: watchImage1
    },
    {
      id: 2,
      name: "Sports Watches",
      slug: "sport-watches",
      imageUrl: watchImage2
    },
    {
      id: 3,
      name: "Fashion Watches",
      slug: "fashion-watches",
      imageUrl: watchImage3
    },
    {
      id: 4,
      name: "Smart Watches",
      slug: "smart-watches",
      imageUrl: watchImage4
    },
    {
      id: 5,
      name: "Vintage Watches",
      slug: "vintage-watches",
      imageUrl: watchImage5
    },
    {
      id: 6,
      name: "Chronograph Watches",
      slug: "chronograph-watches",
      imageUrl: watchImage6
    },
    {
      id: 7,
      name: "Women's Watches",
      slug: "womens-watches",
      imageUrl: watchImage7
    },
    {
      id: 8,
      name: "Men's Watches",
      slug: "mens-watches",
      imageUrl: watchImage8
    },
    {
      id: 9,
      name: "Minimalist Watches",
      slug: "minimalist-watches",
      imageUrl: watchImage9
    },
    {
      id: 10,
      name: "High-End Fashion Watches",
      slug: "High-end-fashion-watches",
      imageUrl: watchImage10
    },
  ];

  return (
    <>
    <MainHeader/>
    <main className="flex flex-col min-h-screen">
      <Hero/>
      <Offers/>
      <FeaturedProducts/>
      <TrendingProducts/>
      <ShopByCollection type="jewelry" collections={jewelryCollections}/>
      <ShopByCollection type="watch" collections={watchCollections}/>
      <Appointment/>
      <EmailSub/>
    </main>
    <MainFooter/>
    </>
  )
}
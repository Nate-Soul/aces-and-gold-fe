import featuredImg1 from "../media/images/products/a.PNG";
import featuredImg2 from "../media/images/products/b.png";
import featuredImg3 from "../media/images/products/c.jpg";
import featuredImg4 from "../media/images/products/d.jpg";
import featuredImg5 from "../media/images/products/e.jpg";
import featuredImg6 from "../media/images/products/f.jpg";
import featuredImg7 from "../media/images/products/g.jpg";
import featuredImg8 from "../media/images/products/h.png";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";


const FeaturedProducts = () => {

    const featuredProducts = [
        {
            id: 1,
            slug: "jewelry-with-touches",
            title: "Jewelry with brookyln touches",
            imageUrl: featuredImg1,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "new"
        },
        {
            id: 2,
            slug: "jewelry-with-touches",
            title: "Jewelry with angeles touches",
            imageUrl: featuredImg2,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "new"
        },
        {
            id: 3,
            slug: "jewelry-with-touches",
            title: "Jewelry with sanandreas touches",
            imageUrl: featuredImg3,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "stock"
        },
        {
            id: 4,
            slug: "jewelry-with-touches",
            title: "Jewelry with vegas touches",
            imageUrl: featuredImg4,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "stock"
        },
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            sale_price: 695,
            description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            imageUrl: featuredImg5,
            rating: {
                rate: 4.6,
                count: 400
            }
        },
        {
            id: 6,
            slug: "solid-gold-petite-micropave",
            title: "Solid Gold Petite Micropave ",
            sale_price: 168,
            description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            imageUrl: featuredImg6,
            rating: {
                rate: 3.9,
                count: 70
            }
        },
        {
            id: 7,
            slug: "white-gold-plated-princess",
            title: "White Gold Plated Princess",
            sale_price: 9.99,
            description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            imageUrl: featuredImg7,
            rating: {
                rate: 3,
                count: 400
            }
        },
        {
            id: 8,
            slug: "pierced-owl-rose-gold-plated-stainless-steel-double",
            title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            sale_price: 10.99,
            description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            imageUrl: featuredImg8,
            rating: {
                rate: 1.9,
                count: 100
            }
        }

    ]

  return (
    <section className="py-14">
        <div className="container">
            <SectionHeading title="Featured Products" description="our expensive but affordable product store"/>
            <div className="flex gap-8 horizontal-scroll hide-scrollbar">
                {featuredProducts && featuredProducts.map((featuredProduct, i) => (
                    <ProductCard product={featuredProduct} key={i}/>
                ))
                }
            </div>      
        </div>
    </section>
  )
}

export default FeaturedProducts

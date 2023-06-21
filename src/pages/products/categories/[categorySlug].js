import { useRouter } from "next/router";
import FilterPanel from "@/components/FilterPanel";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import GenericPageHeader from "@/components/GenericPageHeader";
import ProductCard from "@/components/ProductCard";
import featuredImg5 from "../../../media/images/products/e.jpg";
import featuredImg6 from "../../../media/images/products/f.jpg";
import featuredImg7 from "../../../media/images/products/g.jpg";
import featuredImg8 from "../../../media/images/products/h.png";
import FilterBar from "@/components/FilterBar";
import PaginationBar from "@/components/PaginationBar";
import { generateCrumbs } from "@/libs/breadCrumbs";


const CategorySlug = () => {

    const categoryProducts = [
        {
            id: 5,
            name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
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
            name: "Solid Gold Petite Micropave ",
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
            name: "White Gold Plated Princess",
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
            name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            sale_price: 10.99,
            description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            imageUrl: featuredImg8,
            rating: {
                rate: 1.9,
                count: 100
            }
        }
    ];

    const router = useRouter();
    const { CategorySlug } = router.query;

    const crumbs = generateCrumbs(`/products/categories/${CategorySlug}`);
 
  return (
    <>
    <MainHeader/>
    <main>
        <GenericPageHeader title={CategorySlug} crumbs={crumbs}/>
        <section className="py-14">   
            <div className="container grid grid-cols-12 gap-8 items-start">
                <FilterPanel/>
                <main className="lg:col-span-8 2xl:col-span-3">
                    <FilterBar/>
                    <div className="grid grid-cols-4 gap-8">
                    {categoryProducts && categoryProducts.map((categoryProduct, i) => (
                        <ProductCard key={i} product={categoryProduct}/>
                    ))
                    }
                    </div>
                    <PaginationBar/>
                </main>
            </div>
        </section>
    </main>
    <MainFooter/>
    </>
  )
}

export default CategorySlug

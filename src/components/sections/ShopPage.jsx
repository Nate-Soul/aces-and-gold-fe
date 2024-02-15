import FilterPanel from "../FilterPanel";
import ProductCard from "../subcomponents/ProductCard";
import FilterBar from "../subcomponents/FilterBar";
import PaginationBar from "../subcomponents/PaginationBar";


const ShopPage = () => {

    const products = [
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            slug: "john-hardy-womens-legends-naga-gold-silver-dragon-station-chain-bracelet",
            sale_price: 695,
            description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            imageUrl: "/media/images/products/e.jpg",
            rating: {
                rate: 4.6,
                count: 400
            }
        },
        {
            id: 6,
            title: "Solid Gold Petite Micropave",
            slug: "solid-gold-petite-micropave",
            sale_price: 168,
            description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            imageUrl: "/media/images/products/f.jpg",
            rating: {
                rate: 3.9,
                count: 70
            }
        },
        {
            id: 7,
            title: "White Gold Plated Princess",
            slug: "white-gold-plated-princess",
            sale_price: 9.99,
            description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            imageUrl: "/media/images/products/g.jpg",
            rating: {
                rate: 3,
                count: 400
            }
        },
        {
            id: 8,
            title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            slug: "pierced-owl-rose-gold-plated-stainless-steel-double",
            sale_price: 10.99,
            description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            imageUrl: "/media/images/products/h.png",
            rating: {
                rate: 1.9,
                count: 100
            }
        },
        {
            title: "Gold Hoop Earrings",
            slug: "gold-hoop-earrings",
            sale_price: 23.56,
            description: "These stylish gold hoop earrings feature a textured finish for added shine and dimension.",
            imageUrl: "/media/images/products/h.png",
            rating: {
                rate: 4.6,
                count: 50
            }
        }
    ];

  return (
    <section className="py-14">
        <div className="container">
            <div className="grid grid-cols-12 gap-8 items-start">
                <FilterPanel/>
                <main className="lg:col-span-8 2xl:col-span-9">
                    <FilterBar/>
                    <div className="grid grid-cols-3 gap-8">
                    {
                        products && products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                    </div>
                    <PaginationBar/>
                </main>
            </div>
        </div>
    </section>
  )
}

export default ShopPage

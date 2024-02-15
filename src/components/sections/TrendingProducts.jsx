import ProductCard from "../subcomponents/ProductCard";
import SectionHeading from "../subcomponents/SectionHeading";

const TrendingProducts = () => {

    const trendingProducts = [
        {
            id: 1,
            slug: "jewelry-with-touches",
            title: "Jewelry with brookyln touches",
            imageUrl: "/media/images/products/a.PNG",
            discounted_price: "12.44",
            sale_price: "9.80",
            type: "new"
        },
        {
            id: 2,
            slug: "jewelry-with-touches",
            title: "Jewelry with angeles touches",
            imageUrl: "/media/images/products/b.png",
            discounted_price: "12.44",
            sale_price: "9.80",
            type: "new"
        },
        {
            id: 3,
            slug: "jewelry-with-touches",
            title: "Jewelry with sanandreas touches",
            imageUrl: "/media/images/products/c.jpg",
            discounted_price: "12.44",
            sale_price: "9.80",
            type: "stock"
        },
        {
            id: 4,
            slug: "jewelry-with-touches",
            title: "Jewelry with vegas touches",
            imageUrl: "/media/images/products/d.jpg",
            discounted_price: "12.44",
            sale_price: "9.80",
            type: "stock"
        },
        {
            id: 5,
            slug: "jewelry-with-touches",
            title: "Jewelry with vegas touches",
            imageUrl: "/media/images/products/e.jpg",
            discounted_price: "12.44",
            sale_price: "9.80",
            type: "stock"
        },
        {
            id: 6,
            slug: "jewelry-with-touches",
            title: "Jewelry with vegas touches",
            imageUrl: "/media/images/products/f.jpg",
            discounted_price: "12.44",
            sale_price: "9.80",
            type: "stock"
        },
    ]

  return (
    <section className="py-14">
        <div className="container">
            <SectionHeading title="Trending Products" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero modi assumenda possimus voluptatibus nihil molestiae?"/>
            <div className="flex horizontal-scroll hide-scrollbar gap-8">
                {trendingProducts && trendingProducts.map((trendingProduct, i) => (
                    <div className="flex-none basis-1/6" key={i}>
                        <ProductCard product={trendingProduct}/>
                    </div>
                ))}
            </div>      
        </div>
    </section>
  )
}

export default TrendingProducts

import ProductCard from "./ProductCard";
import featuredImg1 from "../media/images/products/a.PNG";
import featuredImg2 from "../media/images/products/b.png";
import featuredImg3 from "../media/images/products/c.jpg";
import featuredImg4 from "../media/images/products/d.jpg";
import featuredImg5 from "../media/images/products/e.jpg";

const TrendingProducts = () => {

    const trendingProducts = [
        {
            id: 1,
            slug: "jewelry-with-touches",
            name: "Jewelry with brookyln touches",
            imageUrl: featuredImg1,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "new"
        },
        {
            id: 2,
            slug: "jewelry-with-touches",
            name: "Jewelry with angeles touches",
            imageUrl: featuredImg2,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "new"
        },
        {
            id: 3,
            slug: "jewelry-with-touches",
            name: "Jewelry with sanandreas touches",
            imageUrl: featuredImg3,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "stock"
        },
        {
            id: 4,
            slug: "jewelry-with-touches",
            name: "Jewelry with vegas touches",
            imageUrl: featuredImg4,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "stock"
        },
        {
            id: 5,
            slug: "jewelry-with-touches",
            name: "Jewelry with vegas touches",
            imageUrl: featuredImg5,
           discounted_price: "12.44",
           sale_price: "9.80",
           type: "stock"
        },
    ]

  return (
    <section className="py-14">
        <div className="container">
            <header className="section-heading flex justify-between items-center mb-10">
                <h3 className="text-2xl font-bold">Trending Products</h3>
                <p className="text-gray-600 font-medium text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero modi assumenda possimus voluptatibus nihil molestiae?
                </p>
            </header>
            <div className="grid grid-cols-6 gap-8 justify-end">
                {trendingProducts && trendingProducts.map((trendingProduct, i) => (
                    <ProductCard product={trendingProduct} key={i}/>
                ))
                }
            </div>      
        </div>
    </section>
  )
}

export default TrendingProducts

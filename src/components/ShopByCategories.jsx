import Image from "next/image";
import Link from "next/link";
import catImage1 from "../media/images/products/f.jpg";
import catImage2 from "../media/images/products/g.jpg";
import catImage3 from "../media/images/products/h.jpg";
import catImage4 from "../media/images/products/i.jpg";
import catImage5 from "../media/images/products/j.jpg";


const ShopByCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's jewelry",
      slug: "mens-jewelry",
      imageUrl: catImage1
    },
    {
      id: 2,
      name: "Women's jewelry",
      slug: "womens-jewelry",
      imageUrl: catImage2
    },
    {
      id: 3,
      name: "Luxury Watches",
      slug: "luxury-watches",
      imageUrl: catImage3
    },
    {
      id: 4,
      name: "Great hustle",
      slug: "great-hustle",
      imageUrl: catImage4
    },
    {
      id: 5,
      name: "Ultimatum Machine",
      slug: "ultimatum-machine",
      imageUrl: catImage5
    },
  ]
  return (
    <section className="py-14">
        <div className="container">
            <header className="mb-10 text-center">
                <h3 className="font-bold text-2xl capitalize">Shop by Category</h3>
            </header>
            <div className="flex no-wrap">
              {categories && categories.map((category, index) => (
              <figure className="category-card relative shadow-lg transition duration-300 ease-in-out">
                <Image src={category.imageUrl} className="h-96 w-full object-cover" height={400} width={400}/>
                <figcaption className="category-card-overlay absolute top-0 left-0 w-full h-full bg-main bg-opacity-80 hidden flex-col justify-center items-center">
                  <Link href={`${category.slug}`} className="inline-flex border border-transparent bg-white hover:border-white hover:bg-main hover:text-white text-main py-2 px-3 w-max rounded">
                    {category.name}
                  </Link>
                </figcaption>
              </figure>
              ))
              }
            </div>
        </div>      
    </section>
  )
}

export default ShopByCategories

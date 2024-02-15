import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../subcomponents/SectionHeading";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";

const ShopByCollection = ({ type }) => {

  const { carouselInnerRef, canScrollLeft, canScrollRight, scrollCarousel } = useHorizontalScroll();
  
  const jewelryCollections = [
    {
      id: 1,
      name: "Men's",
      slug: "mens-jewelry",
      imageUrl: "/media/images/products/f.jpg"
    },
    {
      id: 2,
      name: "Gold",
      slug: "gold",
      imageUrl: "/media/images/products/g.jpg"
    },
    {
      id: 3,
      name: "Diamonds",
      slug: "diamonds",
      imageUrl: "/media/images/products/h.png"
    },
    {
      id: 4,
      name: "Pearl",
      slug: "pearl",
      imageUrl: "/media/images/products/c.jpg"
    },
    {
      id: 5,
      name: "Wedding & Engagements",
      slug: "wedding-engagements",
      imageUrl: "/media/images/products/b.png"
    },
    {
      id: 6,
      name: "Gemstone",
      slug: "gemstone",
      imageUrl: "/media/images/products/h.png"
    },
    {
      id: 7,
      name: "Bridal",
      slug: "bridal",
      imageUrl: "/media/images/products/i.jpg"
    },
    {
      id: 8,
      name: "Statement",
      slug: "statement",
      imageUrl: "/media/images/products/j.jpg"
    },
    {
      id: 9,
      name: "Antique & Vintage",
      slug: "antique-vintage",
      imageUrl: "/media/images/products/e.jpg"
    },
    {
      id: 10,
      name: "Personalized & Customized",
      slug: "personalized-customized",
      imageUrl: "/media/images/products/d.jpg"
    },
  ];

  const watchCollections = [
    {
      id: 1,
      name: "Luxury Watches",
      slug: "luxury-watches",
      imageUrl: "/media/images/products/m.PNG"
    },
    {
      id: 2,
      name: "Sports Watches",
      slug: "sport-watches",
      imageUrl: "/media/images/products/n.png"
    },
    {
      id: 3,
      name: "Fashion Watches",
      slug: "fashion-watches",
      imageUrl: "/media/images/products/o.png"
    },
    {
      id: 4,
      name: "Smart Watches",
      slug: "smart-watches",
      imageUrl: "/media/images/products/p.png"
    },
    {
      id: 5,
      name: "Vintage Watches",
      slug: "vintage-watches",
      imageUrl: "/media/images/products/q.png"
    },
    {
      id: 6,
      name: "Chronograph Watches",
      slug: "chronograph-watches",
      imageUrl: "/media/images/products/r.png"
    },
    {
      id: 7,
      name: "Women's Watches",
      slug: "womens-watches",
      imageUrl: "/media/images/products/s.png"
    },
    {
      id: 8,
      name: "Men's Watches",
      slug: "mens-watches",
      imageUrl: "/media/images/products/t.png"
    },
    {
      id: 9,
      name: "Minimalist Watches",
      slug: "minimalist-watches",
      imageUrl: "/media/images/products/u.png"
    },
    {
      id: 10,
      name: "High-End Fashion Watches",
      slug: "High-end-fashion-watches",
      imageUrl: "/media/images/products/v.png"
    },
  ];

  const collections = type = "jewelry" ? jewelryCollections : watchCollections;

  return (
    <section className="py-14">
      <div className="container">
        <SectionHeading title="Explore Collection"/>
        <div className="flex gap-8 horizontal-scroll hide-scrollbar" ref={carouselInnerRef}>
          {collections && collections.map((collection, index) => (
          <figure className="collection-card flex-none basis-1/4 relative shadow-lg transition duration-300 ease-in-out" key={index}>
            <Image src={collection.imageUrl} className="h-96 w-full object-cover" height={400} width={400} alt={collection.name}/>
            <figcaption className="collection-card-overlay absolute top-0 left-0 w-full h-full bg-main bg-opacity-80 hidden flex-col justify-center items-center">
              <Link href={`/products/categories/${collection.slug}`} className="inline-flex border border-transparent bg-white hover:border-white hover:bg-main hover:text-white text-main py-2 px-3 w-max rounded">
                {collection.name}
              </Link>
            </figcaption>
          </figure>
          ))
          }
        </div>
        <div className="flex items-center justify-center mt-6 gap-3">
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-full btn-outline-main" onClick={(e) => scrollCarousel(e, "left")} disabled={!canScrollLeft}>
            <span className="bi bi-chevron-left font-bold"></span>
          </button>
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-full btn-outline-main" onClick={(e) => scrollCarousel(e, "right")} disabled={!canScrollRight}>
            <span className="bi bi-chevron-right font-bold"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShopByCollection

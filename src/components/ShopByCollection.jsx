import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";

const ShopByCollection = ({collections, type}) => {

  const { carouselInnerRef, canScrollLeft, canScrollRight, scrollCarousel } = useHorizontalScroll();

  return (
    <section className="py-14">
      <div className="container">
        <SectionHeading title={`Explore Our ${type} Collection`}/>
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

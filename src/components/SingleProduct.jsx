"use client";

import { useState } from "react";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import Image from "next/image";
import Image1 from "../media/images/products/a.PNG";
import Image2 from "../media/images/products/b.png";
import Image3 from "../media/images/products/c.jpg";
import Image4 from "../media/images/products/d.jpg";
import Image5 from "../media/images/products/e.jpg";


const SingleProduct = () => {

    
    const { carouselInnerRef, canScrollLeft, canScrollRight, scrollCarousel } = useHorizontalScroll();

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [ Image1, Image2, Image3, Image4, Image5 ]

  return (
    <section className="py-14">
        <div className="container grid grid-cols-2 gap-8">
            <div className="col-span-1 flex flex-col gap-4">
                <picture>
                    <Image src={images[selectedImg]} alt="name of product or sth" height={500} width={500} className="border h-auto w-full object-cover"/>
                </picture>
                <div className="relative">
                    <div className="images flex gap-2 horizontal-scroll hide-scrollbar" ref={carouselInnerRef}>
                        <Image src={images[0]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(0)} alt="alternative images"/>
                        <Image src={images[1]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(1)} alt="alternative images"/>
                        <Image src={images[2]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(2)} alt="alternative images"/>
                        <Image src={images[3]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(3)} alt="alternative images"/>
                        <Image src={images[4]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(4)} alt="alternative images"/>
                        <Image src={images[4]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(4)} alt="alternative images"/>
                        <Image src={images[4]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(4)} alt="alternative images"/>
                        <Image src={images[4]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(4)} alt="alternative images"/>
                        <Image src={images[4]} height={70} width={70} className="object-cover cursor-pointer border" onClick={(e)=>setSelectedImg(4)} alt="alternative images"/>
                    </div>
                    <button className={`absolute top-1/2 w-8 h-8 rounded-full ${canScrollRight ? `inline-flex` : `hidden`} items-center justify-center bg-main bg-opacity-70 hover:bg-opacity-100 text-white right-0 transform-translate translate-y-1/2`} onClick={(e) => scrollCarousel(e, "right")}>
                        <span className="bi bi-chevron-right"></span>
                    </button>
                    <button className={`absolute top-1/2 w-8 h-8 rounded-full ${canScrollLeft ? `inline-flex` : `hidden`} items-center justify-center bg-main bg-opacity-70 hover:bg-opacity-100 text-white left-0 transform translate-y-1/2`} onClick={(e) => scrollCarousel(e, "left")}>
                        <span className="bi bi-chevron-left"></span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-medium">Product title</h3>
                <span className="text-gray-500 font-bold text-3xl">$123.00</span>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid itaque quidem nemo exercitationem at harum officiis quae voluptas quia veritatis. Numquam id at voluptate repellat fuga accusamus, beatae veniam omnis.
                </p>
                <div className="flex items-center gap-3">
                    <button className="w-8 h-8 items-center justify-center bg-main-500 text-white bg-opacity-100 hover:bg-opacity-75 rounded" onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>
                        <span className="bi bi-dash"></span>
                    </button>
                    <input type="text" name="quantity" id="quantity" className="border p-1 text-center" size={1} defaultValue={quantity}/>
                    <button className="w-8 h-8 items-center justify-center bg-main-500 text-white bg-opacity-100 hover:bg-opacity-75 rounded" onClick={() => setQuantity((prev) => prev + 1)}>
                        <span className="bi bi-plus"></span>
                    </button>
                </div>
                <button className="px-12 py-2 bg-main-500 text-white font-medium w-max inline-flex items-center justify-center gap-2 rounded-3xl">
                    <span className="bi bi-bag-plus"></span>
                    Add to Cart
                </button>
                <ul className="flex gap-3">
                    <li className="inline-flex gap-2 text-main-700 uppercase text-sm cursor-pointer">
                        <span className="bi bi-heart"></span>
                        Add to wishlist
                    </li>
                    <li className="inline-flex gap-2 text-main-700 uppercase text-sm cursor-pointer">
                        <span className="bi bi-back"></span>
                        Add to Compare
                    </li>
                </ul>
                <ul className="info flex flex-col gap-3">
                    <li><span>Vendor: Aces &amp; Gold</span></li>
                    <li><span>Categories: Pearls</span></li>
                    <li><span>Tags: Pearl, wedding, engagements, diamond, carat</span></li>
                </ul>
                <div className="details flex flex-col gap-3">
                    <h6 className="uppercase font-medium text-gray-500 cursor-pointer after:block after:border after:mt-1">Description</h6>
                    <h6 className="uppercase font-medium text-gray-500 cursor-pointer after:block after:border after:mt-1">Additional Information</h6>
                    <h6 className="uppercase font-medium text-gray-500 cursor-pointer after:block after:border after:mt-1">Reviews</h6>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default SingleProduct

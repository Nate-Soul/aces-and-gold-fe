"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImages = [
      {imageUrl: "/media/images/slider/carousel1.png"}, 
      {imageUrl: "/media/images/slider/carousel2.png"}, 
      {imageUrl: "/media/images/slider/carousel3.png"}, 
      {imageUrl: "/media/images/slider/carousel4.png"}, 
      {imageUrl: "/media/images/slider/carousel5.png"}, 
      {imageUrl: "/media/images/slider/carousel6.png"},
      {imageUrl: "/media/images/slider/carousel7.webp"},
    ];

    const prevSlide = () => {
      setCurrentSlide(prev => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    }
    
    const nextSlide = () => {
      setCurrentSlide(prev => (prev === sliderImages.length - 1 ? 0 : prev + 1 ));
    }

    const goToSlide = (slideIndex) => {
      setCurrentSlide(slideIndex)
    }

    useEffect(() => {
      const timer = setTimeout(
        nextSlide, 3000
      )
    return () => {
      clearTimeout(timer);
    }
    }, [nextSlide]);


  return (
    <section id="heroCarousel" className="relative w-full h-screen overflow-hidden">
      <div 
        className="relative w-full h-full flex transition-transform duration-500 ease-in-out transform"
      >
          {
            sliderImages && sliderImages.map((sliderImage, index) => (
              <picture 
                className="carousel-slide w-full h-full flex-shrink-0 relative" 
                key={index} 
                style={{transform:`translateX(-${currentSlide * 100}%)`}}
              >
                <Image
                  src={sliderImage.imageUrl} 
                  alt={`slider image ${index + 1}`} 
                  className="h-full w-full object-cover absolute"
                  fill 
                  priority 
                />
              </picture>
            ))
          }
      </div>
      <button className="inline-flex justify-center items-center w-10 h-10 absolute top-1/2 transform -translate-y-1/2 left-2 bg-main-500 text-white rounded-full opacity-75 hover:opacity-100" onClick={prevSlide}>
      <span className="bi bi-chevron-left"></span>
      </button>
      <button className="inline-flex justify-center items-center w-10 h-10 absolute top-1/2 transform -translate-y-1/2 right-2 bg-main-500 text-white rounded-full opacity-75 hover:opacity-100" onClick={nextSlide}>
        <span className="bi bi-chevron-right"></span>
      </button>
      <div className="carousel-indicators absolute bottom-2 left-0 right-0 flex justify-center">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`indicator rounded-full w-3 h-3 mx-1 ${
              index === currentSlide ? 'bg-main-500' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero

import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const Carousel = ({
  images,
  autoSlide = false,
  autoSlideInterval = 3000,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="relative w-full max-w-3xl ">
        <div className="overflow-hidden relative h-72">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <FaLongArrowAltLeft
          onClick={prevSlide}
          className="hover:cursor-default"
        />
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <FaLongArrowAltRight onClick={nextSlide} />
      </div>
    </>
  );
};

export default Carousel;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface SliderProps {
  images: any;
  interval: any;
  captionClass: string;
  subTextClass: string;
  book?: Boolean;
}
const ImageSlider = ({
  images,
  interval = 5000,
  captionClass,
  subTextClass,
  book,
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);
  return (
    <div className="w-full h-full" style={{ position: "relative" }}>
      <div
        className="h-full"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {images.map((image: any, index: any) => (
          <div
            key={index}
            style={{
              display: index === currentIndex ? "block" : "none",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={image.imageUrl}
              alt={image.caption}
              width="100%"
              className="h-[40vh] md:h-[80vh]"
            />
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(2, 0, 108, 0.6)",
              }}
            />
          </div>
        ))}
        <div className="left-0 right-0 ml-auto mr-auto top-[50px] md:top-[150px] absolute text-white flex flex-col items-center justify-center w-[300px]">
          <h1 className={captionClass}>{images[currentIndex].caption}</h1>
          <h3 className={subTextClass}>{images[currentIndex].subText}</h3>

          {book ? (
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXFIgJ6aV98g5ZyU4HJLhQgC-3x2upfC_Mmx1K17r8Wtgh1Q/viewform?usp=sf_link"
              className="flex w-full flex-col items-center justify-center mt-[8rem] mb-[2rem] md:mb-0" style={{ border: "2px solid white" }}
            >
              <div
                className="font-[700] text-[20px] uppercase px-4 py-4" 
                
              >
                Click here
              </div>
            </Link>
          ) : (
            <div
              className="flex md:w-full w-[80%] flex-col items-center justify-center mt-8 md:px-4 md:py-4 px-1 py-1"
              style={{ border: "2px solid white" }}
            >
              <span className="font-[700] md:text-[24px] text-[14px]">DIGITAL FUSION</span>
              <h5>TECH + BUSINESS</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

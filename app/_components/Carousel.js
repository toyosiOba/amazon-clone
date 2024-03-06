"use client";

import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "../_assets/icons";
import { heroImages } from "../_assets/_data";
import { useState } from "react";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  let prevIndex = activeIndex - 1;
  if (activeIndex === 0) {
    prevIndex = heroImages.length - 1;
  }

  return (
    <section className="relative mx-auto h-150 max-w-375 overflow-x-hidden">
      {/* IMAGES */}
      {heroImages.map((heroImg, index) => (
        <div
          key={index + 1}
          className={`absolute left-0 top-0 z-10 h-full w-full transition-all duration-500 ${index === activeIndex ? "z-20" : index === prevIndex ? "-translate-x-full" : "translate-x-full"}`}
        >
          <Image src={heroImg.src} sizes="100vw" alt={heroImg.alt} fill />
        </div>
      ))}
      {/* GRADIENT COVER */}
      <div className="gradient-1 absolute bottom-0 left-0 right-0 top-56 z-20"></div>
      {/* BUTTONS */}
      <div
        className="absolute left-0 top-0 z-20 flex h-56 w-20 items-center justify-center rounded-sm border-green-800 text-5xl outline-1 outline-white hover:border-2 hover:outline"
        onClick={() =>
          setActiveIndex(
            (activeIndex - 1 + heroImages.length) % heroImages.length,
          )
        }
      >
        <IconChevronLeft />
      </div>
      <div
        className="absolute right-0 top-0 z-20 flex h-56 w-20 items-center justify-center rounded-sm border-green-800 text-5xl outline-1 outline-white hover:border-2 hover:outline"
        onClick={() => setActiveIndex((activeIndex + 1) % heroImages.length)}
      >
        <IconChevronRight />
      </div>
    </section>
  );
}
export default Carousel;

"use client";

import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface ProductSliderProps {
  data: string[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ data }) => {
  return (
    <Swiper navigation loop={true} modules={[Navigation]} className="h-[650px] w-full [&>.swiper-button-next]:text-rose-500 [&>.swiper-button-prev]:text-rose-500">
      {data.map(image => (
        <SwiperSlide key={image}>
          <div className="flex h-full w-full justify-center items-center">
            <Image
              alt={image}
              src={image}
              width={300}
              height={400}
              className="block object-contain w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;

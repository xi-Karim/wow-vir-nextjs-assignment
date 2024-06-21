"use client";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import SimilarProduct from '@/types/similar-product';
import SimilarSliderCard from './similar-slider-card';

export default function SimilarSlider({ products }: { products: SimilarProduct[] }) {
  return (
    <>
      <Swiper slidesPerView={4.5} spaceBetween={30} modules={[Pagination]} className="mySwiper">
        {products.map(product => <SwiperSlide key={product._id}>
          <SimilarSliderCard name={product.name} sellingPrice={product.sellingPrice} image={product.mainImage} />
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}

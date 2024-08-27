"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import styles from "./Slider.module.scss";

type Props = {
  imgs: string[];
};

export const Slider = ({ imgs }: Props) => {
  const toRender = Array.from({ length: 5 }, () => imgs[0]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.root}>
      <Swiper
    
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.bottomSlides}
      >
        {toRender.map((image) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={styles.mainSlider}
        navigation
        loop
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={30}
        slidesPerView={1}
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "rgba(240, 46, 170, 0.4)",
        }}
      >
        {toRender.map((image) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

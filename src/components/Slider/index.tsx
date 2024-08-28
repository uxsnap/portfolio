"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import styles from "./Slider.module.scss";

type Props = {
  imgs: string[];
  navColor: string;
  link: string;
};

export const Slider = ({ imgs, navColor }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className={styles.root}>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Thumbs]}
        className={styles.bottomSlides}
      >
        {imgs.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={styles.mainSlider}
        // navigation
        loop
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        spaceBetween={30}
        slidesPerView={1}
        style={{
          // @ts-ignore
          "--swiper-navigation-color": navColor,
        }}
      >
        {imgs.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

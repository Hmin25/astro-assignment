import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./slideshow.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function SlideShow() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/internal-banners_content-guide-page-560-x-315.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/all-together-now-malaysia.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/2109-astro25concert-acm-content-desktop-mobile-w560px-x-h315px-eng.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/the-hotel.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/lovers-of-the-red-sky.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/the-line-watchers.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/the-kwoks-and-what.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/astro25-ch_content.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

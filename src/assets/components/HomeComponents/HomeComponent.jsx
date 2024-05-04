import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imagePNG from "/src/assets/images/image.jpeg"
import imageJPG from "/src/assets/images/azumi.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const HomeComponent = () => {
      const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
      return (
        <>
          <Swiper
            pagination={pagination}
            autoplay={{
              // delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src={imageJPG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
            <SwiperSlide><img src={imagePNG} alt='Image' className='first_image'/></SwiperSlide>
          </Swiper>
        </>
      );
}

export default HomeComponent;
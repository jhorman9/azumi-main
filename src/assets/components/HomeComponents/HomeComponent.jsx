import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imagePNG from "/src/assets/images/image.jpeg"
import imageJPG from "/src/assets/images/azumi.jpg"
import imageJPGMobile from "/src/assets/images/azumimobile.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/swiper.css';

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
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <picture>
                <source srcSet={imageJPGMobile} media="(max-width: 575px)" />
                <img src={imageJPG} alt='Image' className='first_image'/>
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcset={imageJPGMobile} media="(max-width: 575px)" />
                <img src={imageJPG} alt='Image' className='first_image'/>
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcset={imageJPGMobile} media="(max-width: 575px)" />
                <img src={imageJPG} alt='Image' className='first_image'/>
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcset={imageJPGMobile} media="(max-width: 575px)" />
                <img src={imageJPG} alt='Image' className='first_image'/>
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcset={imageJPGMobile} media="(max-width: 575px)" />
                <img src={imageJPG} alt='Image' className='first_image'/>
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcset={imageJPGMobile} media="(max-width: 575px)" />
                <img src={imageJPG} alt='Image' className='first_image'/>
              </picture>
            </SwiperSlide>
            <SwiperSlide>
              <picture>
                <source srcset={imageJPGMobile} media="(max-width: 575px)" />
                <img src={imageJPG} alt='Image' className='first_image'/>
              </picture>
            </SwiperSlide>
          </Swiper>
        </>
      );
}

export default HomeComponent;
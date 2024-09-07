import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const RenderCardBody = (data) => {

    const baseDelay = 3000;

  return (
        <div className="card-body" key={data.id}>
            <div className="card-image">
                <Swiper
                    autoplay={{
                        delay: baseDelay,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    >
                    {data.images.length > 0 ? (
                        data.images.map((pic) => (
                            <SwiperSlide key={pic}>
                                <img src={pic} alt={data.nombre} width={30} height={30} />
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <img src={examplePhoto} alt="default" width={30} height={30} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className="card-body_container">
                <div className="card-header"> 
                    <h2>{data.nombre}</h2>
                    <span className="big-price"> ${data.precio}</span>
                </div>
                <p className="card-description">{data.descripcion}</p>
            </div>
        </div>
  )
}

export default RenderCardBody
import { useNavigate, useParams } from "react-router-dom";
import menuJson from '../data/main.json';
import examplePhoto from '../assets/images/image-category.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from "react";

export const CategoryById = () => {
    const navigate = useNavigate();
    const [newDataSushi, setNewDataSushi] = useState([]);
    const { category, dishes } = useParams(); 

    const toBack = () => {
        navigate('/main');
    }

    const statusCategory = {
        'Japones': 'japanese',
        'Chino': 'chinese',
        'Peruano': 'peruvian',
        'Thailandes': 'thai',
        'Especialidades de la casa': 'home'
    };

    const statusSubCategory = {
        'Platos fuertes': 'dishes',
        'Entradas': 'entrees',
        'Sopas': 'soups',
        'Vegetales': 'vegetables'
    };

    const filterData = menuJson.filter(
        main => statusCategory[main.categoria] === dishes && statusSubCategory[main.subcategoria] === category
    );
    
    const orderedData = filterData.sort((a, b) => a.nombre.localeCompare(b.nombre));
    const sortedMain = menuJson.sort((a,b) => a.nombre.localeCompare(b.nombre));

    const baseDelay = 3000;

    const convertSushi = () => {
        setNewDataSushi(orderedData.filter(data => data.isRoll));
    }

    const convertAll = () => {
        setNewDataSushi([]);
    }

    const renderCardBody = (data) => (
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
    );

    return (
        <section className="main-category">
            <div className="main-back_page-container">
                <div className="main-back_page" onClick={toBack}>
                    <i className="fa-solid fa-arrow-left"></i> <span>Regresar</span>
                </div>
                {window.location.hash === '#/main/dishes/japanese' && (
                    <div className="sushi-category">
                        <span onClick={newDataSushi.length > 0 ? convertAll : convertSushi}>
                            {newDataSushi.length > 0 ? 'Ver todo' : 'Sushi'}
                        </span>
                    </div>
                )}
            </div>
            <div className="card">
                {category === 'all' ? (
                    sortedMain.map((data) => renderCardBody(data))
                ) : (
                    (newDataSushi.length > 0 ? newDataSushi : orderedData).map((data) => renderCardBody(data))
                )}
            </div>
        </section>
    )
}

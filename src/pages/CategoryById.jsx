import { useNavigate, useParams } from "react-router-dom";
import menuJson from '../data/main.json';
import examplePhoto from '../assets/images/testweb.jpg';
import examplePhoto2 from '../assets/images/testweb2.jpg';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export const CategoryById = () => {

    const navigate = useNavigate();

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

    const { category, dishes } = useParams();
    const filterData = menuJson.filter(main => statusCategory[main.categoria] == dishes && statusSubCategory[main.subcategoria] == category );
    const orderedData = filterData.sort((a, b) => a.nombre.localeCompare(b.nombre));
    const sortedMain = menuJson.sort((a,b) => a.nombre.localeCompare(b.nombre));

    const baseDelay = 3000;

  return (
    <section className="main-category">
        <div className="main-back_page-container">
            <div className="main-back_page" onClick={toBack}>
                <i class="fa-solid fa-arrow-left"></i> <span>Regresar</span>
            </div>
        </div>
        <div className="card">
            {
                category == 'all' 
                ?sortedMain.map((data) => (
                    <div className="card-body" key={data.id}>
                        <div className="card-image">
                        <Swiper autoplay={{
                            delay: baseDelay,
                            disableOnInteraction: false,
                            }}              
                            modules={[Pagination, Autoplay]} className="mySwiper">
                            <SwiperSlide><img src={examplePhoto} alt="foto de azumi" width={30} height={30}/></SwiperSlide>
                            <SwiperSlide><img src={examplePhoto2} alt="foto de azumi" width={30} height={30}/></SwiperSlide>
                        </Swiper>                   </div>
                        <div className="card-body_container">
                            <div className="card-header">
                                <h2>{data.nombre}</h2>
                                <span className="big-price"> ${data.precio}</span>
                            </div>
                            <p className="card-description">{data.descripcion}</p>
                        </div>
        
                    </div>
                )): 
                orderedData.map((data) => (
                    <div className="card-body" key={data.id}>
                        <div className="card-image">
                        <Swiper autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            }}              
                            modules={[Autoplay, Pagination]} className="mySwiper">
                            <SwiperSlide><img src={examplePhoto} alt="foto de azumi" width={30} height={30}/></SwiperSlide>
                            <SwiperSlide><img src={examplePhoto2} alt="foto de azumi" width={30} height={30}/></SwiperSlide>
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
                ))
            }
        </div>
    </section>
  )
}

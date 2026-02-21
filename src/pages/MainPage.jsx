import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, useNavigate } from 'react-router-dom';

import categoryPNG from '../assets/images/image-category.png';
import '../assets/styles/main.css';

const MainPage = () => {

  const location = window.location.href;
  const [routeActually, setrouteActually] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setrouteActually(location);
  },[location]);

  const changeRoute = (route) => {
    navigate(route);
  };

  return (
    <section className='main' style={{textAlign: 'center', margin: '0 auto'}}>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta name="description" content="El men&#250; digital de Azumi ofrece una amplia variedad de opciones para disfrutar." />
        <link rel='canonical' href={routeActually} />
        <title>Azumi - Men&#250; digital</title>
      </Helmet>
      <div className='main_see-all'>
        <div className='main_see-all-banner'>
          <div className='section__card' onClick={()=> changeRoute('all')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de todas las categorias" title='Men&#250; de todas las categorias' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>VER TODOS</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='main_entrees'>
        <NavLink to={'/entrees'} className='title_main name-category'>ENTRADAS</NavLink>
        <div className='content__card'>
          <div className='section__card' onClick={()=> changeRoute('entrees/peruvian')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria peruana" title='Men&#250; de la categoria peruana' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Peruana</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('entrees/japanese')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Japonesa</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('entrees/chinese')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria china" title='Men&#250; de la categoria china' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>China</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('entrees/thai')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria tailandesa" title='Men&#250; de la categoria tailandesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Tailandesa</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('vegetales')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria de ensaladas" title='Men&#250; de la categoria de ensaladas' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Ensaladas</h3>
            </div>
          </div>

        </div>
      </div>

      <div className='main_entrees soups'>
      <NavLink to={'soups'} className='title_main name-category'>SOPAS</NavLink>
      <div className='content__card'>

          <div className='section__card' onClick={()=> changeRoute('soups/peruvian')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria peruana" title='Men&#250; de la categoria peruana' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Peruana</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('soups/japanese')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Japonesa</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('soups/chinese')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria china" title='Men&#250; de la categoria china' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>China</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('soups/thai')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria tailandesa" title='Men&#250; de la categoria tailandesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Tailandesa</h3>
            </div>
          </div>

        </div>
      </div>

      <div className='main_entrees'>
      <NavLink to={'dishes'} className='title_main name-category'>PLATOS FUERTES</NavLink>
      <div className='content__card'>
          <div className='section__card' onClick={()=> changeRoute('dishes/peruvian')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria peruana" title='Men&#250; de la categoria peruana' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Peruana</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('dishes/japanese')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Japonesa</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('dishes/chinese')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria china" title='Men&#250; de la categoria china' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>China</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('dishes/thai')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria tailandesa" title='Men&#250; de la categoria tailandesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Tailandesa</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('dishes/italian')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria italiana" title='Men&#250; de la categoria italiana' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Italiana</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('dishes/home')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria especialidades de la casa" title='Men&#250; de la categoria de especialidades de la casa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Especialidad de la casa</h3>
            </div>
          </div>

          <div className='section__card' onClick={()=> changeRoute('sushi')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria de sushi" title='Men&#250; de la categoria de sushi' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Sushi</h3>
            </div>
          </div>

        </div>
      </div>

      <div className='main_entrees'>
        <h2 className='title_main'>OTROS</h2>
        <div className='content__card'>

          <div className='section__card' onClick={()=> changeRoute('postres')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria de los postres' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Postres</h3>
            </div>
          </div>
          <div className='section__card' onClick={()=> changeRoute('drinks')}>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria de bebidas' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Bebidas</h3>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default MainPage;
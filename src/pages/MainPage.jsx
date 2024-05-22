import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../assets/styles/main.css';
import categoryPNG from '../assets/images/image-category.png';

const MainPage = () => {

  const location = window.location.href;
  const [routeActually, setrouteActually] = useState('')

  useEffect(() => {
    setrouteActually(location)
  },[]);

  return (
    <section className='main' style={{textAlign: 'center', margin: '0 auto'}}>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta name="description" content="El men&#250; digital de Azumi ofrece una amplia variedad de opciones para disfrutar." />
        <link rel='canonical' href={routeActually} />
        <title>Azumi - Men&#250; digital</title>
      </Helmet>
      <div className='main_entrees'>
        <h2 className='title_main'>ENTRADAS</h2>
        <div className='content__card'>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Sushi</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Tailandesa</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Japonesa</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>China</h3>
            </div>
          </div>

        </div>
      </div>

      <div className='main_entrees soups'>
        <h2 className='title_main'>SOPAS</h2>
        <div className='content__card'>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Japonesa</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>China</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Peruana</h3>
            </div>
          </div>

        </div>
      </div>

      <div className='main_entrees'>
        <h2 className='title_main'>PLATOS FUERTES</h2>
        <div className='content__card'>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Japonesa</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>China</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Peruana</h3>
            </div>
          </div>

          <div className='section__card'>
            <img width={200} height={'100%'} src={categoryPNG} alt="Imagen representativa de la categoria japonesa" title='Men&#250; de la categoria japonesa' className='card__image'/>
            <div className='card__text'>
              <h3 className='sub-title_main'>Italiana</h3>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default MainPage;
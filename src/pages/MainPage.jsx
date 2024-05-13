import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../assets/styles/main.css';

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
        <span className='title_main'>Entradas</span>
        
      </div>
    </section>
  )
}

export default MainPage;
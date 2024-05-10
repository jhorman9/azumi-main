import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const MainPage = () => {

  const location = window.location.href;
  const [routeActually, setrouteActually] = useState('')

  useEffect(() => {
    setrouteActually(location)
  },[]);

  return (
    <section style={{textAlign: 'center', margin: '0 auto'}}>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta name="description" content="El men&#250; digital de Azumi ofrece una amplia variedad de opciones para disfrutar." />
        <link rel='canonical' href={routeActually} />
        <title>Azumi - Men&#250; digital</title>
      </Helmet>
      <article>
        <h1>Bienvenidos al men&#250; de Azumi Panamá</h1>
        <p>Descubre nuestra amplia variedad de opciones.</p>
      </article>
    </section>
  )
}

export default MainPage;
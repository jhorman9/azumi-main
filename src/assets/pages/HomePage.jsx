import React, { Fragment } from 'react';
import HomeComponent from '../components/HomeComponents/HomeComponent';

const HomePage = () => {
  return (
    <section style={{textAlign: 'center', marginTop: '28px', marginBottom: '28px'}}>
        <h1>HomePage Azumi PTY</h1>
        <p>This is a example for azumi</p>
        <small>a small text for azumi</small>
        <HomeComponent />
    </section>
  )
}

export default HomePage;
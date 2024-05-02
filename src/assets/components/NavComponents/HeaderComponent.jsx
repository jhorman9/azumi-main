import React from 'react';
import LocationSVG from '../../images/icons/LocationSVG';
import PhoneSVG from '../../images/icons/PhoneSVG';

const HeaderComponent = () => {
  return (
    <header>
        <div className='header-info'>
        <LocationSVG />
        <a target='_blank' href='https://maps.app.goo.gl/xDAGmWJ54sSaSfoH9'>Calle 72 Plaza 72 Local 3 - San Francisco - Panamá</a>
        </div>
        <div className='header-info'>
        <PhoneSVG />
        <a href="tel:3904072">+507 390-4072</a>
        </div>
    </header>
  )
}

export default HeaderComponent;
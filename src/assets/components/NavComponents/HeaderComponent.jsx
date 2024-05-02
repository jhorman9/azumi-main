import React from 'react';
import LocationSVG from '../../images/icons/LocationSVG';
import PhoneSVG from '../../images/icons/PhoneSVG';

const HeaderComponent = () => {
  return (
    <header>
        <div className='header-info'>
        <LocationSVG />
        <p>Calle 72 Plaza 72 Local 3 - San Francisco - Panamá</p>
        </div>
        <div className='header-info'>
        <PhoneSVG />
        <p>390-4072</p>
        </div>
    </header>
  )
}

export default HeaderComponent
import React from 'react';
import LocationSVG from '../../assets/images/icons/LocationSVG';
import PhoneSVG from '../../assets/images/icons/PhoneSVG';

const HeaderComponent = () => {
  return (
    <header>
        <div className='header-info'>
          <LocationSVG />
          <a target='_blank' href='https://maps.app.goo.gl/xDAGmWJ54sSaSfoH9'><span className='desktop-view'>Calle 72 Plaza 72 Local 3 -</span> San Francisco</a>
        </div>
        <div className='header-info'>
          <PhoneSVG />
          <a href="tel:3904072">390-4072</a>
        </div>
        <div className="header-info">
          <PhoneSVG />
          <a href="https://wa.link/egw0dg">+507 6045-4821</a>
        </div>
    </header>
  )
}

export default HeaderComponent;
import HeaderComponent from './HeaderComponent';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../../assets/styles/header-nav.css'

const NavBar = () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
  return (
    <>
      <HeaderComponent />
    </>
  )
}

export default NavBar;
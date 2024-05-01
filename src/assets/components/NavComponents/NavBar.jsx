import { NavLink } from 'react-router-dom';
import LocationSVG from '../../images/icons/LocationSVG';
import PhoneSVG from '../../images/icons/PhoneSVG';

const NavBar = () => {
  return (
    <>
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
      <nav>
        <div className='header_icon'>
            icono
        </div>
        <ul className='header_list'>
            <li>
              <NavLink to={"/"}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Sobre nosotros</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Productos</NavLink>
            </li>
            <li>
              <NavLink to={"/reserva"}>Reserva</NavLink>
            </li>
            <li>
              <NavLink to={"/main"}>Men&#250;</NavLink>
            </li>
            <li>
              <NavLink to={"/contacts"}>Cont&#225;ctanos</NavLink>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;
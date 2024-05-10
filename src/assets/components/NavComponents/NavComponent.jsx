import React from 'react'
import { NavLink } from 'react-router-dom';
import LOGOPNG from '../../images/icons/logo.png';

const NavComponent = () => {
  return (
    <nav>
        <div className='header_icon'>
            <img src={LOGOPNG} alt="Logo de azumi" width={100} height={100} title='Logo de azumi' loading='lazy' />
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
  )
}

export default NavComponent
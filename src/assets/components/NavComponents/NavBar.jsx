import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
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
    </header>
  )
}

export default NavBar;
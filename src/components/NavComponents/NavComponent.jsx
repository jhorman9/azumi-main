import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LOGOPNG from '../../assets/images/icons/logo.png';
import BurgerSVG from '../../assets/images/icons/burguer.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setHandleClick } from '../../store/slice/handleClickSideBar';

const NavComponent = () => {

  const dispatch = useDispatch();
  const mainState = useSelector(state => state.handleClickSideBar);

  const handleClick = () => {
    if(mainState){
      dispatch(setHandleClick(false))
    }else{
      dispatch(setHandleClick(true))
    }
  };

  return (
    <>
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
        <img onClick={handleClick} className='header_burguer' loading='lazy' src={BurgerSVG} alt="Icono de menu de hamburguesa" title='Menu de hamburguesa' width={50} height={50} />
    </nav>
    </>
  )
}

export default NavComponent;
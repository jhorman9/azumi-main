import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store/store.js';
import MainPage from './pages/MainPage';
import NavBar from './components/NavComponents/NavBar';

import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { CategoryById } from './pages/CategoryById';
import { DrinksPage } from './pages/DrinksPage';
import { Shadow } from './components/Shadow';
import { FooterComponent } from './components/FooterComponents/FooterComponent';
import { Fragment } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './assets/styles/index.css';
import "./assets/styles/App.css";

export {
  React,
  ReactDOM,
  Route,
  Routes,
  App,
  store,
  HashRouter,
  HelmetProvider,
  Provider,
  MainPage,
  NavBar,
  CategoryById,
  DrinksPage,
  Shadow,
  FooterComponent,
  Fragment
}
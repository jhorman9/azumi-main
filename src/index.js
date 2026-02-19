import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store/store.js';

import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './assets/styles/index.css';

export {
  React,
  ReactDOM,
  App,
  store,
  HashRouter,
  HelmetProvider,
  Provider
}
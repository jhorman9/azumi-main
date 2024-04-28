import { Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import HomeComponent from './assets/components/HomeComponents/HomeComponent';
import NavBar from './assets/components/NavComponents/NavBar';
import "./assets/styles/App.css";
import AboutPage from './assets/pages/AboutPage';
import Products from './assets/pages/ProductsPage';
import Reserva from './assets/pages/ReservaPage';

function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/reserva' element={<Reserva />}/>
      <Route path='/main' element={<Reserva />}/>
      <Route path='/cart' element={<Reserva />}/>
    </Routes>
    <HomeComponent />
    </>
  )
}

export default App

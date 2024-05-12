import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import NavBar from './assets/components/NavComponents/NavBar';
import "./assets/styles/App.css";
import AboutPage from './assets/pages/AboutPage';
import Products from './assets/pages/ProductsPage';
import Reserva from './assets/pages/ReservaPage';
import MainPage from './assets/pages/MainPage';
import CartMain from './assets/pages/CartMain';
import Contacts from './assets/pages/ContactsPage';
import ProtectedRoutes from './assets/components/ProtectedRoutes/ProtectedRoutes';
import FooterComponent from './assets/components/FooterComponents/FooterComponent';
import { setHandleClick } from './store/slice/handleClickSideBar';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const handleClickSideBar = useSelector((state) => state.handleClickSideBar);

  const handleClick = () => {
    dispatch(setHandleClick(false));
  }

  return (
    <>
      <NavBar />
        <main>
          <Routes element={<ProtectedRoutes />}>
              <Route path='/' element={<HomePage />}/>
              <Route path='/about' element={<AboutPage />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/reserva' element={<Reserva />}/>
              <Route path='/main' element={<MainPage />}/>
              <Route path='/cart' element={<CartMain />}/>
              <Route path='/contacts' element={<Contacts />}/>
          </Routes>
        </main>
      <FooterComponent />
      <div
        className="shadow"
        onClick={handleClick}
        style={{
          display: handleClickSideBar ? 'block' : 'none',
        }}
      ></div>
    </>
  )
}

export default App

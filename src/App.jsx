import { Route, Routes } from 'react-router-dom';
import "./assets/styles/App.css";
import { setHandleClick } from './store/slice/handleClickSideBar';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './pages/MainPage';
import NavBar from './components/NavComponents/NavBar';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import FooterComponent from './components/FooterComponents/FooterComponent';
import { CategoryById } from './pages/CategoryById';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { DrinksPage } from './pages/DrinksPage';

function App() {

  const dispatch = useDispatch();
  const handleClickSideBar = useSelector((state) => state.handleClickSideBar);
  const handleClick = () => {
    dispatch(setHandleClick(false));
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const date = new Date();

  return (
    <>
      <NavBar />
      <ScrollToTop />
        <main>
          <Routes element={<ProtectedRoutes />}>
              {/* <Route path='/' element={<HomePage />}/>
              <Route path='/about' element={<AboutPage />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/reserva' element={<Reserva />}/> */}
              <Route path='/' element={<MainPage />}/>
              <Route path='/:category' element={<CategoryById />} />
              <Route path='/:category/:dishes' element={<CategoryById />} />
              <Route path="/drinks" element={<DrinksPage />} />
              {/* <Route path='/cart' element={<CartMain />}/>
              <Route path='/contacts' element={<Contacts />}/> */}
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

export default App;
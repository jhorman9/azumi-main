import { Route, Routes } from 'react-router-dom';
import { CategoryById } from './pages/CategoryById';
import { DrinksPage } from './pages/DrinksPage';
import { Shadow } from './components/Shadow';
import { FooterComponent } from './components/FooterComponents/FooterComponent';

import MainPage from './pages/MainPage';
import NavBar from './components/NavComponents/NavBar';
import ScrollToTop from './components/ScrollToTop';

import "./assets/styles/App.css";

function App() {

  return (
    <>
      <NavBar />
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/:category' element={<CategoryById />} />
          <Route path='/:category/:dishes' element={<CategoryById />} />
          <Route path="/drinks" element={<DrinksPage />} />
        </Routes>
      <FooterComponent />
      <Shadow />
    </>
  )
}

export default App;
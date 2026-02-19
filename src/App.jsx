import { Fragment, Routes, Route, NavBar, MainPage, CategoryById, DrinksPage, FooterComponent, Shadow } from './index';

function App() {

  return (
    <Fragment>
      <NavBar />
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/:category' element={<CategoryById />} />
          <Route path='/:category/:dishes' element={<CategoryById />} />
          <Route path="/drinks" element={<DrinksPage />} />
        </Routes>
      <FooterComponent />
      <Shadow />
    </Fragment>
  )
}

export default App;
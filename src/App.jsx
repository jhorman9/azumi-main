import { Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import HomeComponent from './assets/components/HomeComponents/HomeComponent';

function App() {


  return (
    <>
    <HomePage/>
    <HomeComponent />
    <Routes>
      <Route path='/' element={<HomePage />}/>
    </Routes>
    </>
  )
}

export default App

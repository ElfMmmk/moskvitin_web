import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import CatalogPage from '@/pages/CatalogPage/CatalogPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <WelcomePage /> } />
        <Route path='/catalog' element={ <CatalogPage /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

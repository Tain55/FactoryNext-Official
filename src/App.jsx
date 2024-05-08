import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from '../src/Components/2-Image/Image'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage';
import InformationDesk from './Pages/InformationDeskPage/InformationDesk';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import BlogsPage from './Pages/BlogsPage/BlogsPage'

function App() {

  return (
    <div className='view'>
      {/* <HomePage/> */}
      {/* <AboutPage/> */}
      {/* <InformationDesk/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/informationdesk' element={<InformationDesk/>}/>
          <Route path='/blogs' element={<BlogsPage/>} />
        </Routes>
      </BrowserRouter>      

    </div>
  )
}
export default App



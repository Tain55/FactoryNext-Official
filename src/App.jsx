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
import BlogDetailPage from './Pages/BlogDetailPage/BlogDetailPage'
import IotProducts from './Pages/IOTProducts/IotProducts'
import OurSolutons from './Pages/OurSolutions/OurSolutons'
import ConstructionPage from './Pages/ConstructionPage/ConstructionPage'
import MachineMonitoring from './Pages/IOTProducts/Machine Monitoring/MachineMonitoring'
import EnvitonmentMonitoring from './Pages/IOTProducts/Environment Monitoring/EnvitonmentMonitoring'
import OtherProducts from './Pages/IOTProducts/Other products/OtherProducts'
import BlogDetailPage2 from './Pages/BlogDetailPage/BlogDetailPage2'

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
          <Route path= '/blogDetailPage' element={<BlogDetailPage/>}/>
          <Route path= '/blogDetailPage2' element={<BlogDetailPage2/>}/>
          <Route path= '/iotproducts'   element={<IotProducts/>}>
            <Route path='machine-monitoring'  index element={<MachineMonitoring/>}/>
            <Route path='enivonment-monitoring' element={<EnvitonmentMonitoring/>}/>
            <Route path='other-products' element={<OtherProducts/>}/>
          </Route>
          <Route path= '/solutions' element={<OurSolutons/>}/>
          {/* <Route path= '/soluitons' element={<OurSolutons/>}/> */}
          <Route path= "*" element={<ConstructionPage/>}/>
        </Routes>
      </BrowserRouter>      

    </div>
  )
}
export default App



import React, { useEffect, useRef, useState } from 'react';
import './NavigationBar.css'
import logo from '../Images/logo.png';
import transform from './../3-Transform/Transform';
import {Link, NavLink} from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Solutions from './../6-Solutions/Solutions';
import Blogs from './../11-Blogs/Blogs';
import InformationDesk from './../../Pages/InformationDeskPage/InformationDesk';


const NavigationBar = () => {
  const [menu, setMenu] = useState('a');
  const [color, setColor] = useState(false)
  const [isChecked, setIsChecked] = useState(false);

  const changeColor = () => {
    if(window.scrollY>=200){
      setColor(true)
    }else{
      setColor(false)
    } 
  }

  window.addEventListener('scroll', changeColor)

  const navLinkStyles = ({isActive}) =>{
      return{
        textDecoration: 'none',
        color: isActive ? '#1570EF' : 'white',
        fontWeight: isActive ? 'bold': 'normal',
        // fontWeight: 'bold',
        fontSize: '16px',
       
      }
  }

  // const handleCheckboxChange = () => {
  //   setIsChecked(false); // Toggle the value
  // };
  let menueRef = useRef();

  useEffect (()=>{
    let handler = (e) =>{
      
      if(!menueRef.current.contains(e.target)){
        setIsChecked(false);
      }
    }

    document.addEventListener("mousedown", handler);
  });

  

  return (
    <div className={color ? 'navbar navColor':'navbar navTrans' } >
      <div className='navContents'>
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <div className='nav-logo'>
            <img className='nav-icon' src={logo} alt="" />
          </div>
        </Link>
        <input type='checkbox' id='check' />  {/* checked={isChecked} */}
        <label htmlFor="check" >
            {/* <IoMenuOutline className='checkIcon' onClick={()=>isChecked? setIsChecked(false): setIsChecked(true)}/> */}
            <IoMenuOutline className='checkIcon' onClick={()=>{setIsChecked(prevState => !prevState)}}/>
        </label>
        <div className='lists' ref={menueRef}>
          <nav className='nav-menu' >
            <NavLink className='menu-text' style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink className='menu-text' style={navLinkStyles} to='/about'>About Us</NavLink>
            <NavLink className='menu-text' style={navLinkStyles} to='/solutions'>Our Solutions</NavLink>
            {/* <NavLink className='menu-text' style={navLinkStyles} to='/iotproducts/machine-monitoring'>IoT products</NavLink> */}
            {/* <NavLink className='menu-text' style={navLinkStyles} to='/blogs'>Blogs</NavLink> */}
            <NavLink className='menu-text' style={navLinkStyles} to='/informationdesk'>Information Desk</NavLink>
          </nav>

          {/* <ul > */}
                {/* <li onClick={()=>{setMenu("home")}} className='menu-text'><Link to='/' activeClassName="active" style={{ textDecoration: 'none' ,color: 'white'}}>Home{menu==="home"?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("about")}} className='menu-text'><Link to='/about' activeClassName="active" style={{ textDecoration: 'none',color: 'white' }}>About Us{menu==="mango"?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("ourSolutions")}} className='menu-text'><Link to='/ourSolutions' activeClassName="active" style={{ textDecoration: 'none' ,color: 'white'}}>Our Solutions{menu==="categoris"?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("iorProducts")}} className='menu-text'><Link to='/iotProducts' activeClassName="active" style={{ textDecoration: 'none' ,color: 'white'}}>IoT Products{menu==="about"?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("blogs")}} className='menu-text'><Link to='/about' activeClassName="active" style={{ textDecoration: 'none' ,color: 'white'}}>Blogs{menu==="about"?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setMenu("informationDesk")}} className='menu-text'><Link to='/informationdesk' activeClassName="active" style={{ textDecoration: 'none' ,color: 'white'}}>Information Desk{menu==="about"?<hr/>:<></>}</Link></li> */}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;



{/*  */}
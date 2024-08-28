import React from 'react'
import {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
const [loading, setLoading] = useState(); 
useEffect(() => {
    setLoading(true)

   setTimeout(()=>{
    setLoading(false)
   },4000)
  }, []);
  return (
    <>
    {loading ?(
<div className="dot-spinner mx-auto">
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
</div>
    ) :(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>

    )}
    
    </>
  )
}

export default Layout
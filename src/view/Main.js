import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'


function Main() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default Main
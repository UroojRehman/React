import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { Outlet } from 'react-router'
import { Footer } from './Footer'

export const Layout = () => {
  return (
 <>
    <NavbarComponent/>
    <Outlet/>
    <Footer/>
 </>
  )
}

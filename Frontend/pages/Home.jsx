import React from 'react'
import Navbar from '../src/components/pages.component/Navigation'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

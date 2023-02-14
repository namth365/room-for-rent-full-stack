import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

function Home() {
  return (
    <div className='w-full flex flex-col items-center h-full '>
      <Header />
      <Navigation />
      <div className='w-3/5 flex flex-col justify-start mt-3'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home


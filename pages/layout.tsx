'use client'
import Navbar from '@/components/Navbar/index'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className='h-full min-h-screen overflow-x-hidden'>
        <Navbar />
        <main className='w-full lg:2xl:w-[69%] mx-auto'>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
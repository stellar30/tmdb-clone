import Navbar from '@/components/Navbar/index'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className='h-full min-h-screen overflow-hidden'>
        <Navbar />
        <main className='w-[68%] mx-auto'>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
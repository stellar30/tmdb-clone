import { MoviedetailRes } from '@/types/Movie';
import clsx from 'clsx'
import React from 'react'
import Flex from '../Base/Flex';

interface HeadProps {
  content: MoviedetailRes;
}

const Head = ({ content }: HeadProps) => {
  return (
    <div>
      <div className='h-[510px] w-screen left-0 bg-right bg-cover z-0 fixed bg-no-repeat brightness-[0.4]' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${content.backdrop_path}")`
      }}>
        <div className='z-50 w-2/3 mx-auto'>
          <Flex wrap='wrap'>

        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
        <p className='text-red-900 text-8xl'>asdasd</p>
          </Flex>

        </div>
      </div>
    </div>
  )
}

export default Head
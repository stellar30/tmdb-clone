'use client'
import React, { useState } from 'react'
import TrendingTab from '@/components/Base/TrendingTab';
import Flex from '@/components/Base/Flex';
import Item from '@/components/MovieCard/Item';

import { useQueryTrending } from '@/hooks/useTrending';

export default function Home() {
  const [search, setSearch] = useState('')
  const [trendingParams, setTrendingParams] = useState({
    time: 'day',
    type: 'all'
  })

  const { data, isFetched } = useQueryTrending(trendingParams)

  const handleTrending = (time: string) => {
    setTrendingParams((trend) => ({ ...trend, time}))
  }

  return (
    <>
      <div className='w-full h-[350px] bg-gradient-to-r from-sky-900 to-sky-400 flex items-center'>
        <div className='w-full h-[244px] px-10 py-8 flex flex-col'>
          <span className='text-5xl font-bold text-white'>Welcome.</span>
          <span className='text-3xl font-semibold text-white'>Millions of movies, TV shows and people to discover. Explore now.</span>

          <div className="relative mt-12">
            <input
              value={search}
              type="text"
              required
              className="rounded-full w-full h-12 pl-4 pr-28 py-2 text-gray-900 placeholder-gray-600 focus:z-10 focus:border-primary focus:outline-none text-lg"
              placeholder="Search for a movie, tv show, person......"
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="absolute inset-y-0 right-0 flex items-center text-sm leading-5">
              <button className='h-full w-24 rounded-full bg-gradient-to-r from-light-green to-light-blue group'>
                <span className='text-base font-semibold text-white group-hover:text-blue-950'>Search</span>
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className='w-full h-[440px] mt-10'>
        <Flex items='center'>
          <span className='pl-10 text-2xl font-semibold mr-4'>Trending</span>
          <TrendingTab handleTrending={handleTrending} />
        </Flex>

        <div className='w-full h-[380px] mt-6 bg-[url("/assets/svg/trending-bg.svg")] bg-bottom bg-no-repeat'>
          <div className='overflow-auto whitespace-nowrap space-x-6 px-10 flex flex-auto w-full h-full'>
            {isFetched && data?.results?.map((item) => (
              <Item key={item.id} content={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

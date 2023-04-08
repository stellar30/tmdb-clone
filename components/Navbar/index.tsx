import Link from 'next/link';
import React, { useState } from 'react'
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline'
import NavItem from './NavItem'
import Flex from '../Base/Flex';
import clsx from 'clsx';

const movieOptions = {
  title: 'Movies',
  options: [
    { to: '/movie', label: 'Popular' },
    { to: '/movie/now-playing', label: 'Now Playing' },
    { to: '/movie/upcoming', label: 'Upcoming' },
    { to: '/movie/top-rated', label: 'Top Rated' },
  ]
}

const TvShowOptions = {
  title: 'TV Shows',
  options: [
    { to: '/tv', label: 'Popular' },
    { to: '/tv/airing-today', label: 'Airing Today' },
    { to: '/tv/on-the-air', label: 'On TV' },
    { to: '/tv/top-rated', label: 'Top Rated' },
  ]
}

const peopleOptions = {
  title: 'People',
  options: [
    { to: '/people', label: 'Popular People' },
  ]
}

const MoreOptions = {
  title: 'More',
  options: [
    { to: '/discuss', label: 'Discussions' },
    { to: '/leaderboard', label: 'LeaderBoard' },
    { to: '/talk', label: 'Support' },
    { to: '/documentation/api', label: 'API' },
  ]
}

const Navbar = () => {
  const [expandSideBar, setExpandSideBar] = useState(false)
  return (
    <div className='h-16 bg-dark-blue flex items-center sticky top-0'>
      <div className='w-full lg:2xl:w-2/3 mx-auto px-6 flex items-center justify-between'>
        <div className='space-x-8 items-center hidden lg:2xl:flex'>
          <Link href='/'>
            <img src="/assets/svg/tmdb.svg" alt="logo tmdb" width="154" height="20" />
          </Link>

          <NavItem menu={movieOptions} />

          <NavItem menu={TvShowOptions} />

          <NavItem menu={peopleOptions} />

          <NavItem menu={MoreOptions} />
        </div>

        <Flex className='flex lg:2xl:hidden overflow-x-hidden'>
          <Bars3Icon className='text-white w-5 h-5 cursor-pointer' onClick={() => setExpandSideBar(!expandSideBar)} />
          <div className={
            clsx(
              'absolute top-16 left-0 bg-dark-blue w-2/3 translate-all duration-[320ms] p-6 border-0 border-t border-gray-400',
              {
                'translate-x-0': expandSideBar,
                '-translate-x-[100%]': !expandSideBar,
              }
            )
          }>
            <span className='text-white'>asdweqwe</span>
          </div>
        </Flex>

        <div className='flex items-center space-x-8'>
          <BellIcon className='text-white w-5 h-5' />

          <div className='w-9 h-9 rounded-full bg-slate-500 flex justify-center items-center cursor-pointer'>
            <span className='text-lg font-medium text-white'>W</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
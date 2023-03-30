import Link from 'next/link';
import React from 'react'
import { FaBell } from "react-icons/fa";
import NavItem from './NavItem'

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
  return (
    <div className='h-16 bg-dark-blue flex items-center sticky top-0'>
      <div className='w-2/3 mx-auto px-6 flex items-center justify-between'>
        <div className='space-x-8 flex items-center'>
          <Link href='/'>
            <img src="/assets/svg/tmdb.svg" alt="logo tmdb" width="154" height="20" />
          </Link>

          <NavItem menu={movieOptions} />

          <NavItem menu={TvShowOptions} />

          <NavItem menu={peopleOptions} />

          <NavItem menu={MoreOptions} />
        </div>

        <div className='flex items-center space-x-8'>
          <FaBell className='text-white w-5 h-5' />

          <div className='w-9 h-9 rounded-full bg-slate-500 flex justify-center items-center cursor-pointer'>
            <span className='text-lg font-medium text-white'>W</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import { TrendingRes } from '@/types/Trending';
import React from 'react'
import dayjs from 'dayjs';
import Link from 'next/link';

interface TrendingProps {
  content: TrendingRes;
}

const Item = ({ content }: TrendingProps) => {
  return (
    <>
      <div className='w-[150px] h-[225px] inline-block whitespace-nowrap'>
        <div className=' bg-slate-600 rounded-md w-[150px] h-[225px] relative'>
          <Link href={`/${content.media_type}/${content.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${content.poster_path}`} width="150" height="225" alt="" className='rounded-md' />
          </Link>
        </div>

        <div className='px-2 flex flex-col'>
          <Link href={`/${content.media_type}/${content.id}`}>
            <span className='text-base font-bold text-gray-900 hover:text-light-blue whitespace-pre-wrap'>{content.title || content.name}</span>
          </Link>
          <span>
            {dayjs(content.release_date).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
    </>
  )
}

export default Item
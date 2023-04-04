import { Cast } from '@/types/Movie'
import Link from 'next/link'
import React from 'react'

interface CastItemsProps {
  casts: Cast[]
}

interface CastItemProps {
  cast?: Cast | null
}

const CastItem = ({ cast = null }: CastItemProps) => {
  return (
    <>
      {cast ? (
        <div className='w-[138px] h-[275px] shadow-md rounded-md border-2 mb-4'>
          <div className='w-[138px] h-[175px] rounded-t-md overflow-hidden'>
            <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt="" />
          </div>
          <div className='px-2 py-2 space-y-1'>
            <span className='text-base leading-[18px] font-bold block whitespace-pre-line'>{cast.name}</span>
            <span className='text-sm leading-[16px] font-normal block whitespace-pre-wrap'>{cast.character}</span>
          </div>
        </div>
      ) : (
        <div className='w-[138px] h-[275px] flex mb-4'>
          <div className='w-full flex justify-center items-center'>
            <Link href="/" className='hover:text-gray-400'>
              <span className='text-base font-bold'>View More ...</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

const CastItems = ({ casts }: CastItemsProps) => {
  return (
    <div>
      <span className='text-2xl font-semibold'>Top Billed Cast</span>

      <div className='overflow-auto whitespace-nowrap mt-4 space-x-6 flex flex-auto w-full h-full'>
        {casts.slice(0, 9).map((item) => (
          <CastItem key={item.id} cast={item} />
        ))}
        {casts.length > 9 ? (
          <CastItem />
        ) : null}
      </div>
    </div>
  )
}

export default CastItems
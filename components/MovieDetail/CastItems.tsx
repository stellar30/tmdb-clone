import { Cast } from '@/types/Movie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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
  const [movieId, setMovieId] = useState('')

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    setMovieId(router.query.id as string)
  }, [router.isReady])
  return (
    <div>
      <span className='text-2xl font-semibold'>Top Billed Cast</span>

      <div className='overflow-auto whitespace-nowrap my-4 space-x-4 flex flex-auto w-full h-full'>
        {casts.slice(0, 9).map((item) => (
          <CastItem key={item.id} cast={item} />
        ))}
        {casts.length > 9 ? (
          <CastItem />
        ) : null}
      </div>

      {movieId && (
        <Link href={`/movie/${movieId}/cast`}>
          <span className='text-lg font-semibold hover:text-gray-500'>Full Cast & Crew</span>
        </Link>
      )}

      <div className='border-0 border-t-[1px] border-gray-300 my-6' />
    </div>
  )
}

export default CastItems
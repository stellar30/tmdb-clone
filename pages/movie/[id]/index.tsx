import React, { useEffect, useState } from 'react'
import { useQueryMovieDetail } from '@/hooks/useMovie'
import { Cast, MovieDetailRes } from '@/types/Movie'
import { useRouter } from 'next/router'
import Head from '@/components/MovieDetail/Head'
import CastItems from '@/components/MovieDetail/CastItems'
import Sidebar from '@/components/MovieDetail/Sidebar'
import Reviews from '@/components/MovieDetail/Reviews'

const MovieDetail = () => {
  const router = useRouter()
  const [movieId, setMovieId] = useState('')

  useEffect(() => {
    if (!router.isReady) return
    setMovieId(router.query.id as string)
  }, [router.isReady])

  const { data } = useQueryMovieDetail(movieId)

  return (
    <>
      {data && (
        <div className='mb-20'>
          <Head content={data as MovieDetailRes} />

          <div className='grid grid-cols-12 mt-8'>
            <div className='col-span-9'>
              <CastItems casts={data.credits?.cast as Cast[]} />
              <Reviews reviews={data.reviews} />
            </div>
            
            <div className='col-span-3 pl-6 ml-4'>
              <Sidebar content={data as MovieDetailRes} />
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default MovieDetail
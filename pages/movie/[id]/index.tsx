import React, { useEffect, useState } from 'react'
import Head from '@/components/MovieDetail/Head'
import { useQueryMovieDetail } from '@/hooks/useMovie'
import { useRouter } from 'next/router'

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
      {data && <Head content={data} />}
    </>
  )
}

export default MovieDetail
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import axios from "axios"
import type { AxiosError } from 'axios';
import { MovieDetailParams } from './types';
import { MovieDetailRes } from '@/types/Movie';

export const useQueryMovieDetail = (movie_id: string): UseQueryResult<MovieDetailRes> => {
  return useQuery<any, AxiosError<{ message: string }>, any, any>(
    ['trending', movie_id],
    async () => {
      const response = await axios.get<MovieDetailParams>(`/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos,genres,images,credits,keywords,external_ids,reviews`)
      return response.data
    }, { enabled: !!movie_id }
  )
}
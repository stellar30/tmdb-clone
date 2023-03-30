import { useQuery, UseQueryResult } from '@tanstack/react-query'
import axios from "axios"
import type { AxiosError } from 'axios';
import { TrendingParams, TrendingRes } from './types';

export const useQueryTrending = ({ time = 'type', type = 'all' }: TrendingParams): UseQueryResult<TrendingRes> => {
  return useQuery<any, AxiosError<{ message: string }>, any, any>(
    ['trending', type, time],
    async () => {
      const response = await axios.get<TrendingRes>(`/trending/${type}/${time}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
      return response.data
    }, { enabled: !!type && !!time }
  )
}
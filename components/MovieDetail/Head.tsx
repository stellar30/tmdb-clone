'use client'
import { Crew, MovieDetailRes } from '@/types/Movie';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react'
import Flex from '../Base/Flex';

interface HeadProps {
  content: MovieDetailRes;
}

interface FilterCrew {
  name: string;
  jobs: string[];
}

const Head = ({ content }: HeadProps) => {
  const [crew, setCrew] = useState<FilterCrew[]>([])
  const [duration, setDuration] = useState({
    hours: '',
    minutes: ''
  })

  const filterCrewBy = ['Director', 'Screenplay', 'Story', 'Characters', 'Writer']

  const filterCrew = (): any => {
    if (!content?.credits?.crew) return
    const filtered = content?.credits?.crew.filter((item: Crew) => filterCrewBy.includes(item.job as string))

    const mergingName: any = filtered.reduce((acc, curr) => {
      const key = curr.name;
      if (!acc[key]) {
        acc[key] = { name: curr.name, jobs: [curr.job] };
      } else {
        acc[key]?.jobs?.push(curr.job);
      }
      return acc;
    }, {} as Record<string, FilterCrew>)

    return Object.values(mergingName).sort((a: any, b: any) => b.jobs.length - a.jobs.length)
  }

  useEffect(() => {
    if (!content.runtime) return
    const hours = dayjs.duration(content.runtime, 'minutes').format('H')
    const minutes = dayjs.duration(content.runtime, 'minutes').format('m')

    setDuration(() => ({ hours, minutes }))
  }, [content.runtime])

  useEffect(() => {
    if (!content?.credits?.crew) return

    const mergeCrew = async () => {
      const mergedCrew = await filterCrew()
      setCrew(mergedCrew)
    }

    mergeCrew()
      .catch(console.error)
  }, [content?.credits?.crew])

  return (
    <div className='relative w-screen'>
      <img src={`https://image.tmdb.org/t/p/original${content.backdrop_path}`} alt="" className='w-screen h-[510px] object-cover object-left-top brightness-[0.4] -ml-[calc(calc(100%-68%)/2)]' />

      <div className='z-50 w-[68%] h-[510px] mx-auto brightness-100 absolute top-0'>
        <Flex className='py-6 w-full h-full space-x-10' wrap='nowrap' justify='start' items='center'>
          <Flex items='center'>
            <img src={`https://image.tmdb.org/t/p/w300${content.poster_path}`} alt="poster" className='rounded-xl' />
          </Flex>
          <Flex dir='column' wrap='wrap' className='w-[calc(100%-350px)]'>
            <span className='text-4xl font-extrabold text-white'>{content.title}<span className='font-normal'>{` (${dayjs(content.release_date).format('YYYY')})`}</span></span>

            <div className='mb-6'>
              <span className='text-base text-white mr-2'>{dayjs(content.release_date).format('MM/DD/YYYY')}</span>
              <span className='text-base text-white before:content-["·"] before:text-white before:font-bold before:text-xl before:mr-2 mr-2'>{content.genres?.map((item) => item.name).join(', ')}</span>
              <span className='text-base text-white before:content-["·"] before:text-white before:font-bold before:text-xl before:mr-2'>{`${duration.hours}h ${duration.minutes}m`}</span>
            </div>

            <span className='text-lg text-gray-300 italic'>{content.tagline}</span>
            <span className='text-2xl text-white font-semibold'>Overview</span>
            <span className='text-base text-white font-normal'>{content.overview}</span>

            <div className='mt-6 w-full grid grid-cols-3 gap-x-24'>
              {crew && crew?.map((item: any, i: number) => (
                <Flex className='mb-6' dir='column' key={i}>
                  <span className='text-white font-extrabold'>{item.name}</span>
                  <span className='text-white'>{item.jobs.join(', ')}</span>
                </Flex>
              ))}
            </div>

          </Flex>
        </Flex>
      </div>
    </div>
  )
}

export default Head
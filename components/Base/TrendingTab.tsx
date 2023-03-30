import React, { useEffect, useState } from 'react'
import clsx from "clsx";
import { Trending } from '@/types/Trending';

interface TrendinTabProps {
  handleTrending: (val: string) => void;
} 

const TrendingTab = ({ handleTrending }: TrendinTabProps ) => {
  const [trending, setTrending] = useState<Trending>('day')

  return (
    <>
      <div className="flex mx-2 mt-2 w-[220px] rounded-full border border-blue-950 relative tabs">
        <button
          className={clsx(
            "tabs-item w-full relative z-10 h-7 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none",
            {
              active: trending === 'day'
            }
          )}
          onClick={() => {
            handleTrending('day')
            setTrending('day')
          }}
        >
          <span
            className={clsx(
              "text-base font-semibold",
              { 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-400': trending === 'day' }
            )}>
            Today
          </span>
        </button>
        <button
          className={clsx(
            "tabs-item w-full relative z-10 h-7 mx-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none",
            {
              active: trending === 'week'
            }
          )}
          onClick={() => {
            handleTrending('week')
            setTrending('week')
          }}
        >
          <span
            className={clsx(
              "text-base font-semibold",
              { 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-400': trending === 'week' }
            )}>
            This Week
          </span>
        </button>

        <div className="tab-item-animate rounded-full h-7 bg-blue-950" />
      </div>
    </>
  )
}

export default TrendingTab
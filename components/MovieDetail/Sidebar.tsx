import { MovieDetailRes } from '@/types/Movie';
import currency from '@/utils/currency';
import langFormatter from '@/utils/language';
import React from 'react'

interface SidebarProps {
  content: MovieDetailRes;
}

const Sidebar = ({ content }: SidebarProps) => {
  return (
    <div className='space-y-4'>
      <div>
        <span className='text-base font-semibold block'>Status</span>
        <span className='text-base font-medium block'>{content.status}</span>
      </div>
      <div>
        <span className='text-base font-semibold block'>Original Language</span>
        <span className='text-base font-medium block'>{langFormatter(content.original_language as string)?.name}</span>
      </div>
      <div>
        <span className='text-base font-semibold block'>Budget</span>
        <span className='text-base font-medium block'>{content.budget ? currency.format(content.budget as number) : '-'}</span>
      </div>
      <div>
        <span className='text-base font-semibold block'>Revenue</span>
        <span className='text-base font-medium block'>{content.revenue ? currency.format(content.revenue as number) : '-'}</span>
      </div>
    </div>
  )
}

export default Sidebar
import { MovieDetailRes } from '@/types/Movie';
import currency from '@/utils/currency';
import langFormatter from '@/utils/language';
import React from 'react'
import Flex from '../Base/Flex';
import Link from 'next/link';

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

      <div className='py-2'>
        <span className='text-[17px] font-semibold block'>Keywords</span>
        <Flex dir='row' wrap='wrap'>
          {content.keywords?.keywords?.map((item) => (
            <Link href={`/keywords/${item.id}`}>
              <div className='mr-1 mb-2 px-2 py-1 rounded bg-gray-300 flex items-center cursor-pointer'>
                <span className='text-sm'>{item.name}</span>
              </div>
            </Link>
          ))}
        </Flex>
      </div>

      <div className='border-0 border-t-[1px] border-gray-300' />
    </div>
  )
}

export default Sidebar
import { Review, Reviews } from '@/types/Movie'
import React, { useEffect, useState } from 'react'
import Flex from '../Base/Flex'
import { renderMd } from '@/utils/renderMarkDown'

interface ReviewProps {
  reviews?: Reviews
}

const Reviews = ({ reviews }: ReviewProps) => {
  const [firstReview, setFirstReview] = useState<Review>({})
  const [contentHtml, setContentHtml] = useState('')

  useEffect(() => {
    if (!reviews?.results?.length) return

    setFirstReview(reviews?.results[0])
  }, [reviews])
  
  useEffect(() => {
    const getRenderMd = async () => {
      const md = await renderMd(firstReview.content as string)
      setContentHtml(md.contentHtml)
    }

    getRenderMd()
      .catch(console.error)
  }, [firstReview])
  return (
    <div>
      <Flex className='mb-6'>
        <span className='text-xl font-semibold mr-8'>Social</span>
        <div className='border-0 border-b-4 border-black pb-1'>
          <span className='text-lg font-semibold'>Reviews <span className='text-lg font-semibold text-gray-500'>{reviews?.total_results}</span></span>
        </div>
      </Flex>
      <div className='w-full rounded-md p-5 shadow-[2px_2px_10px_2px_#00000024,2px_2px_10px_2px_#00000024]'>
        <Flex className='w-full space-x-6' wrap='nowrap'>
          <div className='w-16 h-16 min-w-[64px] rounded-full whitespace-nowrap overflow-hidden'>
            <img className='whitespace-nowrap' src={`https://image.tmdb.org/t/p/w200/${firstReview.author_details?.avatar_path}`} alt="" />
          </div>

          <div dangerouslySetInnerHTML={{ __html: contentHtml }}>
            
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default Reviews
import clsx from 'clsx';
import React, { ReactNode } from 'react'

interface FlexProps {
  width?: string;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  dir?: 'row' | 'column';
  columnGap?: number;
  rowGap?: number;
  wrap?: 'nowrap' | 'wrap';
  rounded?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  children: ReactNode | undefined;
  className?: string;
}

const flexWrap = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
}
const flexDir = {
  column: 'flex-col',
  row: 'flex-row',
}
const flexJustify = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}
const flexAlignItems = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
}

const flexRoundeds = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  base: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
}

const Flex = ({ dir = 'row', items = 'start', justify = 'start', rounded = 'none', wrap = 'nowrap', children, className = '' }: FlexProps) => {
  return (
    <div
      className={
        clsx('flex', [
          !!className && className,
          !!dir && flexDir[dir],
          !!items && flexAlignItems[items],
          !!justify && flexJustify[justify],
          !!rounded && flexRoundeds[rounded],
          !!wrap && flexWrap[wrap]
        ])
      }
    >
      {children}
    </div>
  )
}

export default Flex
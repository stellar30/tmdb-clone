import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';

interface NavItemProps {
  menu: {
    title: string;
    options: OptionsProps[]
  };
}

interface OptionsProps {
  to: string;
  label: string;
}

const NavItem = ({ menu }: NavItemProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <span className='text-base font-semibold text-white cursor-pointer hover:text-blue-100'>
          {menu.title}
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className='absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className="py-2">
            {menu.options.map((item) => (
              <Link href={item.to} key={item.to}>
                <Menu.Item>
                  <div className='w-full py-2 hover:bg-slate-100'>
                    <span className='text-base font-medium text-gray-600 px-6'>{item.label}</span>
                  </div>
                </Menu.Item>
              </Link>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default NavItem
'use client';

import { Combobox, Transition } from '@headlessui/react'

import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps ) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        alt="car-logo"
                        width={20}
                        height={20}
                        className='ml-4'
                    />
                </Combobox.Button>
                <Combobox.Input className="serach-manufacturer__input" placeholder='Volkswagen'/>
            </div>
        </Combobox>
    </div>
  )
} 

export default SearchManufacturer
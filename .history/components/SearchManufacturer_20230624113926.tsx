'use client';

import { Combobox, Transition } from '@headlessui/react'

import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps ) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox
            </div>
        </Combobox>
    </div>
  )
} 

export default SearchManufacturer
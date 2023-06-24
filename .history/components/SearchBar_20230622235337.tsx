'use client'

import { useState  } from "react";
import SearchManufacturer from "./SearchManufacturer";


const SearchBar  = () => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {};


  return (
    <form
        className='searchbar'
        onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
            
            />
        </div>
    </form>
  )
}

export default SearchBar
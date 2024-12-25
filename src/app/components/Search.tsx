import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className="relative w-[400px] h-[56px] ">

        <input
        type="text"
        placeholder="Search"
        className=" w-full h-full bg-customLightGray p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none"
        />
        <Image
        src="/MagnifyingGlass.png"
        alt="Search"
        width={24}
        height={24}
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
        />
    </div>
  )
}

export default Search
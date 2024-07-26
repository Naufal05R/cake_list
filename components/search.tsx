import React from 'react'
import { IoSearch } from 'react-icons/io5';

const Search = () => {
  return (
    <label className="relative flex flex-1">
      <input
        type="text"
        className="w-full rounded-sm border border-gray-200 py-2 pl-10 text-sm outline-2"
        placeholder="Search..."
        onChange={(e) => {}}
      />
      <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
    </label>
  );
}

export default Search

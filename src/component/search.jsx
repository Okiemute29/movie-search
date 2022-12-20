import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
        <label className="search-label">
          <span className="search-span">Search</span>
          <input 
            type='text'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
           />
        </label>
      </div>
  )
}

export default Search

import React from 'react'

const Search = ({setSearchValue}) => {
  const handleChange = (e) =>{ 
    setSearchValue(e.target.value)
  }; 

  return (
    <div className='search-bar'>
      <input type="search" onChange={(e)=>handleChange(e)} name="search" id="search" placeholder='Search Heavenlyyy Treats For A Treat...' />
      <div className="sort-options">
        
      </div>
    </div>
  )
}

export default Search
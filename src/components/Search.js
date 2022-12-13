import {MdSearch} from "react-icons/md"
import {useState} from "react"

function Search({setSearchText}) {
  
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <div className="search">
        <MdSearch size="1.5rem"/>
        <input onChange={(e)=>handleChange(e)} placeholder="type to search..."/>
    </div>
  )
}

export default Search
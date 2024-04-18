import { BsSearch } from 'react-icons/bs'
import React from 'react'

function SearchInput() {
  return (
    <form className='flex p-10 item-center gap-2'>
        <input type ="text" placeholder='Search_' className='input input-bordered rounded-full'/>
        <button  type='submit' className='btn btn-circle bg-sky-500 text-white'><BsSearch></BsSearch></button>
    </form>
  )
}

export default SearchInput

import React from 'react'
import { SearchItem } from '../../components'
import icons from '../../utils/icons'

const { BsChevronRight,
  IoLocationOutline,
  GiMoneyStack,
  BsCrop,
  ImHome,
  FiSearch } = icons
const Search = () => {
  return (
    <div className='p-[10px] bg-[#FEBB02] rounded-md flex-col lg:flex-row flex items-center justify-around gap-2'>
      <SearchItem IconBefore={<ImHome />} fontWeight IconAfter={<BsChevronRight />} text='Phong tro, nha tro' />
      <SearchItem IconBefore={<IoLocationOutline />} IconAfter={<BsChevronRight />} text='Toan quoc' />
      <SearchItem IconBefore={<GiMoneyStack />} IconAfter={<BsChevronRight />} text='Chon gia' />
      <SearchItem IconBefore={<BsCrop />} IconAfter={<BsChevronRight />} text='Chon dien tich' />
      <button
        type='button'
        className='outline-none py-2 px-4 w-full bg-secondary1 text-[12.9px] rounded-md flex items-center justify-center gap-2 text-white font-medium'>
        <FiSearch />
        Tim kiem
      </button>
    </div>
  )
}

export default Search
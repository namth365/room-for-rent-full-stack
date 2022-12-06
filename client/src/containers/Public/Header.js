import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Button } from '../../components'
import { path } from '../../utils/constant';
import icons from '../../utils/icons'

const {
  AiOutlinePlusCircle
} = icons;
function Header() {

  const navigate = useNavigate()
  const goLogin = useCallback(() => {
    navigate(path.LOGIN)
  }, [])


  return (
   <div className='w-1100'>
     <div className='w-full flex justify-between items-center'>
      <img
        src={logo}
        className='w-[240px] h-[70px] object-contain'
        alt='logo'
      />
      <div className='flex items-center gap-1'>
        <small>Xin Chao !</small>
        <Button
          text={`Đăng Nhập`}
          textColor='text-white'
          bgColor='bg-secondary1'
          onClick={goLogin} />
        <Button
          text={`Đăng Ký`}
          textColor='text-white'
          bgColor='bg-secondary1'
          onClick={goLogin} />
        <Button
          text={`Đăng Tin Mới`}
          textColor='text-white'
          bgColor='bg-secondary2'
          IcAfter={AiOutlinePlusCircle} />
      </div>
    </div>
   </div>
  )
}

export default Header
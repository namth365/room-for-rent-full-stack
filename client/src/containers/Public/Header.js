import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components'
import { path } from '../../utils/constant';
import logo from '../../assets/logo.png'
import icons from '../../utils/icons'

const {
  AiOutlinePlusCircle
} = icons;
function Header() {

  const navigate = useNavigate()
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, {state: {flag}})
  }, [])


  return (
    <div className='w-1100'>
      <div className='w-full flex justify-between items-center'>
        <Link to={'/'}>
          <img
            src={logo}
            className='w-[240px] h-[70px] object-contain'
            alt='logo'
          />
        </Link>
        <div className='flex items-center gap-1'>
          <small>Xin Chao !</small>
          <Button
            text={`Đăng Nhập`}
            textColor='text-white'
            bgColor='bg-secondary1'
            onClick={() => goLogin(false)} />
          <Button
            text={`Đăng Ký`}
            textColor='text-white'
            bgColor='bg-secondary1'
            onClick={() => goLogin(true)} />
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
import React, { useEffect, useState } from 'react'
import { Button, InputForm } from '../../components'
import { useLocation } from 'react-router-dom'

function Login() {
  const location = useLocation()
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])
  
  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm border border-[#DEDEDE]'>
      <h3 className='font-semibold text-2xl mb-3'>
        {isRegister ? 'Tạo tài khoản mới' : 'Đăng Nhập'}
      </h3>
      <div className='w-full flex flex-col gap-4'>
        {isRegister && <InputForm label={'HỌ TÊN'} />}
        <InputForm label={'SỐ ĐIỆN THOẠI'} />
        <InputForm label={'MẬT KHẨU'} />
        <Button
          text='Đăng nhập'
          bgColor='bg-secondary1'
          textColor='text-white'
          fullWidth
        />
      </div>
      <div className='mt-7 flex items-center justify-between'>
        {isRegister ? <small> Bạn đã có tài khoản?
          <span onClick={() => { setIsRegister(false) }}
            className='text-[blue] hover:text-orange cursor-pointer '> Đăng nhập ngay </span>
        </small> : <>
          <small className='text-[blue] hover:text-orange cursor-pointer '>Bạn quên mật khẩu ?</small>
          <small onClick={() => { setIsRegister(true) }} className='text-[blue] hover:text-orange cursor-pointer '>Tạo tài khoản mới</small>
        </>}
      </div>
    </div>
  )
}

export default Login
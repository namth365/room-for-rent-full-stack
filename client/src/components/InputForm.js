import React, {memo} from 'react'

function InputForm({ label, value, setValue, type }) {
    return (
        <div>
            <label htmlFor='phone' className='text-xs'>{label}</label>
            <input
                type='type'
                id='phone'
                className='outline-none bg-[#E8F0FE] p-2 rounded-md w-full'
                value={value}
                onChange={(e) => setValue(prev => ({...prev, [type]: e.target.value}))}
            />
        </div>
    )
}

export default memo(InputForm)
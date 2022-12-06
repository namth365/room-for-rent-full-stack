import React, {memo} from 'react'

function InputForm({ label }) {
    return (
        <div>
            <label htmlFor='phone' className='text-xs'>{label}</label>
            <input
                type='type'
                id='phone'
                className='outline-none bg-[#E8F0FE] p-2 rounded-md w-full'
            />
        </div>
    )
}

export default memo(InputForm)
import React, { memo } from 'react'

function InputForm({ label, value, setValue, type, invalidFields, setInvalidFiels }) {
    return (
        <div>
            <label htmlFor='phone' className='text-xs'>{label}</label>
            <input
                type='type'
                id='phone'
                className='outline-none bg-[#E8F0FE] p-2 rounded-md w-full'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [type]: e.target.value }))}
                onFocus={() => setInvalidFiels([])}
            />
            {invalidFields.length > 0 && invalidFields.some(i => i.name === type) && <small className='text-red-500 italic'> {invalidFields.find(i => i.name === type)?.message} </small>}
        </div>
    )
}

export default memo(InputForm)
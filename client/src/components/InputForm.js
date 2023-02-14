import React, { memo } from 'react'

function InputForm({ label, value, setValue, keyPayload, invalidFields, setInvalidFiels, type }) {
    return (
        <div>
            <label htmlFor='phone' className='text-xs'>{label}</label>
            <input
                type={type || 'text'}
                id='phone'
                className='outline-none bg-[#E8F0FE] p-2 rounded-md w-full'
                value={value}
                onChange={(e) => setValue(prev => ({ ...prev, [keyPayload]: e.target.value }))}
                onFocus={() => setInvalidFiels([])}
            />
            {invalidFields.length > 0 && invalidFields.some(i => i.name === keyPayload) && <small className='text-red-500 italic'> {invalidFields.find(i => i.name === keyPayload)?.message} </small>}
        </div>
    )
}

export default memo(InputForm)
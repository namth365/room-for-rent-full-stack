import React, {memo} from 'react'

function Button({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) {
    return (
        <button
            type="button"
            className={`p-2 ${textColor} ${bgColor} ${fullWidth && 'w-full' } outline-none rounded-md hover:underline cursor-pointer flex items-center justify-center`}
            onClick={onClick}
        >
            <span> {text}</span>
            <span>{IcAfter && <IcAfter />}</span>
        </button>
    )
}

export default memo(Button)


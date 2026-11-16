import React from 'react'

const Button = (props) => {
    return (
        <button onClick={() => console.log("add")}
            className="mt-6 w-full bg-gray-300 py-3 text-xs font-medium uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
        >
            {props.text}
        </button>
    )
}

export default Button;
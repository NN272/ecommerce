import React from 'react'

const Details = () => {
    const title = "Abstract Print Shirt";
    const price = "$99";
    const description = "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.";

    return (
        <div>
            <button
                aria-label="Save"
                className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center bg-white text-gray-500 hover:text-neutral-900"
                >
                <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                >
                <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
            </button>

            <h1 className="text-sm font-semibold uppercase tracking-wide">
                {title}
            </h1>
            <p className="mt-3 text-sm font-medium">{price}</p>
            <p className="mt-3 text-xs tracking-wide text-gray-500">
                MRP incl. of all taxes
            </p>

            <p className="mt-10 text-xs font-medium leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default Details;
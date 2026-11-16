import React from 'react'
import item1 from '../../../assets/ProductCard1.png'

const OrderItem = () => {
    return (
        <article className="flex w-95 mt-3 bg-neutral-100 text-neutral-900">
            <img src={item1} alt="" className="block h-30 w-30 object-cover" />

            <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                <h3 className="m-0 text-sm">T-Shirt</h3>
                <button
                    type="button"
                    onClick={() => console.log("gdsfgdsfg")}
                    className="cursor-pointer p-0 text-sm underline underline-offset-4"
                >
                    Change
                </button>
                </div>

                <p className="mt-5 text-sm text-neutral-500">
                Black/S
                </p>

                <div className="mt-auto flex items-baseline justify-between">
                <span className="text-sm text-[#0a1a8c]">1</span>
                <span className="text-sm font-medium">
                    99$
                </span>
                </div>
            </div>
        </article>
    )
}

export default OrderItem;
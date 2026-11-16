import React from 'react'
import OrderItem from '../../common/OrderItem/OrderItem';

const CheckoutCart = () => {
    return (
        <div className='border-1 w-[32rem] h-[36rem] flex justify-center flex-col items-center'>
            <div className='w-95'>
                <p className='text-base font-bold'>YOUR CART</p>
            </div>
            <div className='h-[20rem] overflow-auto'>
                <OrderItem />
                <OrderItem />
            </div>
            <div className='w-95 mt-5 flex justify-between'>
                <p className='text-base font-bold'>Total</p>
                <p className='text-base font-bold text-neutral-500'>180</p>
            </div>
        </div>
    )
}

export default CheckoutCart;
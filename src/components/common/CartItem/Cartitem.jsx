import React from 'react'
import photo1 from '../../../assets/ProductCard1.png'

const CartItem = (props) => {
    return (
        <div className='w-[24rem] flex'>
            <div className='max-w-[21rem]'>
                <img src={props.image} alt="" />
                    <div className='mt-1'>
                        <p className='text-sm color-gray-500'>
                            {props.name}
                        </p>
                        <div className='w-full flex justify-between'>
                            <p className='text-base'>{props.label}</p>
                            <p className='text-base'>${props.price}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[3rem] items-center text-center justify-between'>
                        <button><p className='text-2xl'>X</p></button>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-xl'>L</p>
                            <div className='mt-1 w-[1.5rem] h-[1.5rem] bg-[#000]'></div>
                            <div className='border-1 mt-1 w-[1.5rem] h-[1.5rem]'>+</div>
                            <div className='border-1 w-[1.5rem] h-[1.5rem]'>1</div>
                            <div className='border-1 w-[1.5rem] h-[1.5rem]'>-</div>
                        </div>
                    <div className='w-10 h-10'></div>
            </div>
        </div>
    )
}

export default CartItem;
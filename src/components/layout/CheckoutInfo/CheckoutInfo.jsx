import React from 'react'
import Button from '../../common/Button/Button';

const CheckoutInfo = () => {
    return (
        <div className='mt-3'>
            <p className='text-base font-bold'>CONTACT INFO</p>
            <input type="text" className='w-full h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;Email'/>
            <input type="text" className='w-full h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;Phone'/>
            <p className='text-base mt-3 font-bold'>SHIPPING ADDRESS</p>
            <div className='flex w-full justify-between items-center'>
                <input type="text" className='w-70 h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;First Name'/>
                <input type="text" className='w-70 h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;Last Name'/>
            </div>
            <input type="text" className='w-full h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;Country'/>
            <input type="text" className='w-full h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;State / Region'/>
            <input type="text" className='w-full h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;Address'/>
            <div className='flex w-full justify-between items-center'>
                <input type="text" className='w-70 h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;City'/>
                <input type="text" className='w-70 h-12 mt-3 border-1 border-gray-500 text-base' placeholder='&nbsp;&nbsp;Postal Code'/>
            </div>
            <div className='mt-2 w-70'>
                <Button text="Shipping" />
            </div>
        </div>
    )
}

export default CheckoutInfo;
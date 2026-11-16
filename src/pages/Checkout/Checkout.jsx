import React from 'react'
import Header from '../../components/layout/Header/Header';
import {Link, Outlet} from 'react-router-dom'
import CheckoutCart from '../../components/layout/CheckoutCart/CheckoutCart';

const Checkout = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Header></Header>
            <div className='w-full flex justify-around items-center'>
                <div style={{width: "30%"}}>
                    <p className='text-3xl font-bold'>CHECKOUT</p>
                    <div className='mt-3 w-90 flex justify-between items-center'>
                        <Link to="/checkout/information" className='text-black text-base no-underline'>INFORMATION</Link>
                        <Link to="/checkout/shipping" className='text-black text-base no-underline'>SHIPPING</Link>
                        <Link to="/checkout/payment" className='text-black text-base no-underline'>PAYMENT</Link>
                    </div>
                    <Outlet />
                </div>
                <div style={{width: "40%"}}>
                    <CheckoutCart />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
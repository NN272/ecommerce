import React from 'react'
import Header from '../../components/layout/Header/Header';
import CartItem from '../../components/common/CartItem/Cartitem';
import Button from '../../components/common/Button/Button';
import {selectProducts} from '../../store/slices/productReducer';
import { useSelector } from 'react-redux';

const Cart = () => {
    const items = useSelector(selectProducts);
    var filtered = items.products.filter(item => item.isInCart == true);

    var total = 0;

    if(filtered.length > 0) {
        for(let i = 0;i < filtered.length; i+=1) {
            total = total + filtered[i].price;
        }
    }

    return (
        <div className='flex items-center flex-col'>
            <Header />
            <div className='mt-5 w-[95%] flex justify-between'>
                <div className='w-[60%]'>
                    <p className='text-base font-bold'>SHOPPING BAG</p>
                    <hr />
                    <div className='w-full flex items-center'>         
                        {filtered.map(item => <CartItem image={item.image} name={item.name} label={item.label} price={item.price} />)}
                    </div>
                </div>
                <div className='w-[20%] mt-4 border-1 flex justify-center items-center'>
                    <div className='w-[80%] h-[80%]'>
                        <p className='text-xl'>ORDER SUMMARY</p>
                        <div className='w-full mt-3 flex justify-between'>
                            <p className='text-base'>Subtotal</p>
                            <p className='text-base'>${total}</p>
                        </div>
                        <div className='w-full flex justify-between'>
                            <p className='text-base'>Shipping</p>
                            <p className='text-base'>${total >= 100 ? 0 : 10}</p>
                        </div>
                        <hr />
                        <div className='w-full mt-2 flex justify-between'>
                            <p className='text-2xl'>TOTAL <p className='text-xl text-gray-500'>&nbsp; Tax incl.</p></p>
                            <p className='text-2xl'>${total < 100 ? 10+total : total}</p>
                        </div>
                        <div className='w-full mt-5 flex'>
                            <input type="checkbox" />
                            <p className='text-base text-gray-500'>&nbsp; I agree to the Terms and Conditions</p>
                        </div>
                        <hr />
                        <Button text="CONTINUE" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;

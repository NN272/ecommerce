import React from 'react'
import menu from '../../../assets/menu.png'
import logo from '../../../assets/logo.png'
import favorite from '../../../assets/favorite.png'
import cart from '../../../assets/cart.png'
import account from '../../../assets/account.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex justify-between items-center text-base" style={{height: "150px", width: "95%"}}>
            <div className="flex justify-between items-center" style={{width: "20%"}}>
                <img src={menu} />
                <Link to="/" className='text-base no-underline text-black'>Home</Link>
                <Link to="/collections" className='text-base no-underline text-black'>Collections</Link>
                <Link to="/products" className='text-base no-underline text-black'>Products</Link>
            </div>
            <img src={logo} />
            <div style={{width: "20%"}} className="flex justify-around items-center">
                <img src={favorite} alt="" />
                <Link to="/cart/"><img src={cart} alt="" /></Link>
                <img src={account} alt="" />
            </div>
        </div>
    )
}

export default Header;
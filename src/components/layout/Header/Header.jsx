import React from 'react'
import menu from '../../../assets/menu.png'
import logo from '../../../assets/logo.png'
import favorite from '../../../assets/favorite.png'
import cart from '../../../assets/cart.png'
import account from '../../../assets/account.png'

const Header = () => {
    return (
        <div className="flex justify-between items-center text-base" style={{height: "150px", width: "95%"}}>
            <div className="flex justify-between items-center" style={{width: "20%"}}>
                <img src={menu} />
                <h3>Home</h3>
                <h3>Collections</h3>
                <h3>New</h3>
            </div>
            <img src={logo} />
            <div style={{width: "20%"}} className="flex justify-around items-center">
                <img src={favorite} alt="" />
                <img src={cart} alt="" />
                <img src={account} alt="" />
            </div>
        </div>
    )
}

export default Header;
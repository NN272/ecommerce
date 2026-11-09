import React from 'react'
import BLogo from '../../../assets/BLogo.png'

const Footer = () => {
    return (
        <div className="flex" style={{background: "#dbdbdb", height: "90vh", width: "100%"}}>
            <div style={{width: "50%"}} className='h-full flex flex-col justify-center items-center'>
                <ul>
                    <li>INFO</li>
                    <li style={{marginTop: "2rem"}}>PRICING /</li>
                    <li>ABOUT /</li>
                    <li>CONTACTS</li>
                </ul>
                <ul style={{marginTop: "5rem"}}>
                    <li>LANGUAGES</li>
                    <li style={{marginTop: "2rem"}}>ENG /</li>
                    <li>ESP /</li>
                    <li>SVE</li>
                </ul>
            </div>
            <div style={{width: "50%"}} className='h-full flex justify-start items-center'>
                <img src={BLogo} width="400px" height="400px" alt="" />
            </div>
        </div>
    )
}

export default Footer;
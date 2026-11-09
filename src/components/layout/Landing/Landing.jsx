import React from 'react'
import SearchInput from '../../common/SearchInput/SearchInput';
import GoToShopButton from '../../common/GoToShopButton/GoToShopButton';
import Photo1 from '../../../assets/LandingPhoto1.png';
import Photo2 from '../../../assets/LandingPhoto2.png';

const Landing = () => {
    return (
        <div style={{height: "80vh", width: "95%"}} className="flex">
            <div className="flex flex-col items-start justify-between h-full" style={{width: "20vw"}}>
                <div>
                    <ul className="list-none text-base">
                        <li><p>MEN</p></li>
                        <li><p>WOMEN</p></li>
                        <li><p>KIDS</p></li>
                    </ul>
                    <SearchInput />
                </div>
                <div>
                    <p className='text-5xl'>NEW COLLECTION</p>
                    <p className='text-base'>Summer</p>
                    <p className='text-base'>2024</p>
                </div>
                <div>
                    <GoToShopButton />
                </div>
            </div>
            <div style={{width: "60vw"}} className="flex flex-row justify-around items-end h-full">
                <img style={{height: "30rem", width: "30rem"}} src={Photo1} />
                <img style={{height: "30rem", width: "30rem"}} src={Photo2} />
            </div>
        </div>
    )
}

export default Landing;
import React from 'react'
import Gallery1 from '../../../assets/Gallery1.png'
import Gallery2 from '../../../assets/Gallery2.png'
import Gallery3 from '../../../assets/Gallery3.png'
import Gallery4 from '../../../assets/Gallery4.png'

const Gallery = () => {
    return (
        <div className="flex flex-col justify-between items-center" style={{width: "95%", textAlign: "center", marginTop: "10rem", marginBottom: "10rem"}}>
            <div style={{width: "50rem"}}>
                <p className='text-5xl'>Our Approach to fashion design</p>
                <p className='text-xl' style={{marginTop: "1rem"}}>at elegant vogue , we blend creativity with craftsmanship to create 
                    fashion that transcends trends and stands the test of time each design is meticulously crafted, 
                    ensuring the highest quelity exqulsite finish</p>
            </div>
            <div style={{width: "95%", marginTop: "5rem"}} className='flex justify-around'>
                <img src={Gallery1} style={{height: "25rem"}} alt="" />
                <img src={Gallery2} style={{marginTop: "5rem", height: "25rem"}} alt="" />
                <img src={Gallery3} style={{height: "25rem"}} alt="" />
                <img src={Gallery4} style={{marginTop: "5rem", height: "25rem"}} alt="" />
            </div>
        </div>
    )
}

export default Gallery;
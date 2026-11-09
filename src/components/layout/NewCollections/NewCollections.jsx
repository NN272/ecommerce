import React from 'react'
import ProductCard1 from '../../../assets/ProductCard1.png'
import ProductCard2 from '../../../assets/ProductCard2.png'
import ProductCard3 from '../../../assets/ProductCard3.png'
import ProductCard from '../../common/ProductCard/ProductCard'

const NewCollections = () => {
    const items = [
        {
            id: 1,
            category: "Cotton T Shirt",
            name: "Basic Heavy Weight T-shirt",
            price: "199$",
            image: ProductCard1
        },
        {
            id: 2,
            category: "Cotton  jeans",
            name: "Soft Wash straight Fit Jeans",
            price: "199$",
            image: ProductCard2
        },
        {
            id: 3,
            category: "Cotton T Shirt",
            name: "Basic Heavy Weight T-shirt",
            price: "199$",
            image: ProductCard3
        }
    ]

    return (
        <div style={{width: "95%", marginTop: "15rem"}}>
            <p className='text-5xl' style={{width: "15rem"}}>XIV Collections 23-24</p>
            <div style={{width: "100%"}} className='flex justify-between items-end'>
                <div style={{width: "25rem", marginTop: "4rem"}}>
                    <ul className='list-none flex justify-between text-xl'>
                        <li>All</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl'>Sorts +</p>
                </div>
            </div>
            <hr style={{marginTop: "1rem"}}/>
            <div style={{width: "100%"}} className='flex justify-around'>
                {items.map(item => <ProductCard id={item.id} name={item.name} image={item.image} category={item.category} price={item.price} />)}
            </div>
            <div style={{width: "100%", marginTop: "2rem"}} className="flex justify-center">
                <p className='base-2xl'>More</p>
            </div>
        </div>
    )
}

export default NewCollections;
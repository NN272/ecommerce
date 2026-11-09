import React from 'react'
import ProductCardSlider from '../../common/Slider/Slider';
import NewItem1 from '../../../assets/NeWItem1.png'
import NewItem2 from '../../../assets/NeWItem2.png'
import NewItem3 from '../../../assets/NeWItem3.png'
import NewItem4 from '../../../assets/NeWItem4.png'

const NewItems = () => {
    const items = [
    {
        id: 1,
        image: NewItem3,
        category: "V-Neck T-Shirt",
        name: "Embroidered Seersucker Shirt",
        price: "$99",
    },
    {
        id: 2,
        image: NewItem4,
        category: "Cotton T-Shirt",
        name: "Basic Slim Fit T-Shirt",
        price: "$99",
        swatch: "#ffffff",
        moreColors: 5,
    },
    {
        id: 3,
        image: NewItem2,
        category: "Henley T-Shirt",
        name: "Blurred Print T-Shirt",
        price: "$99",
        swatch: "#DBDCCE",
        moreColors: 3,
    },
    {
        id: 4,
        image: NewItem1,
        category: "Crewneck T-Shirt",
        name: "Full Sleeve Zipper",
        price: "$99",
        swatch: "#EAE8D9",
        moreColors: 2,
    },
    {
        id: 5,
        image: NewItem4,
        category: "Cotton T-Shirt",
        name: "Basic Slim Fit T-Shirt",
        price: "$99",
        swatch: "#ffffff",
        moreColors: 5,
    },
    {
        id: 6,
        image: NewItem2,
        category: "Henley T-Shirt",
        name: "Blurred Print T-Shirt",
        price: "$99",
        swatch: "#DBDCCE",
        moreColors: 3,
    },
    {
        id: 7,
        image: NewItem1,
        category: "Crewneck T-Shirt",
        name: "Full Sleeve Zipper",
        price: "$99",
        swatch: "#EAE8D9",
        moreColors: 2,
    },
    ];

    return (
        <div style={{width: "95%", marginTop: "15rem"}}>
            <div className='w-full flex justify-between items-end'>
                <div  className="flex" style={{width: "15rem"}}>
                    <p className="text-5xl">New This Week</p>
                    <p className='text-xl text-blue-500' style={{marginTop: "1rem"}}>50</p>
                </div>
                <p className='text-sm'>See All</p>
            </div>
            <div>
                <ProductCardSlider
                    items={items}
                    onItemClick={(item) => console.log("open", item)}
                    onAdd={(item) => console.log("add to cart", item)}
                />
            </div>
        </div>
    )
}

export default NewItems;
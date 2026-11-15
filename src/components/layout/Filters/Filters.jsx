import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from '../../common/Dropdown/Dropdown';
import Sizes from '../../common/Sizes/Sizes';

const Filters = () => {
    const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
    const filters = [
        {
            title: "Availability",
            items: ["In Stock", "Out of stock"],
            id: 0
        },
        {
            title: "Category",
            items: ["T-Shirt", "Hoodie", "Jeans", "Polo shirt", "Jackets"],
            id: 1
        },
        {
            title: "Colors",
            items: ["Blue", "Black", "White", "Red", "Green"],
            id: 2
        },
        {
            title: "Collections",
            items: ["2026", "2025", "2024"],
            id: 3
        },
        {
            title: "Ratings",
            items: ["5", "4", "3", "2", "1"],
            id: 4
        },
    ];

    return (
        <div style={{width: "20%"}}>
            <p className='text-xl bold'>Filters</p>
            <Sizes />
            <Accordion style={{width: "80%"}}>
                {filters.map(item => <Dropdown ekey={item.id} header={item.title} filters={item.items}></Dropdown>)}
            </Accordion>
        </div>
    )
}

export default Filters;
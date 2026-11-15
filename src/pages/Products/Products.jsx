import React from 'react'
import Header from '../../components/layout/Header/Header';
import Filters from '../../components/layout/Filters/Filters';
import ProductsLayout from '../../components/layout/ProductsLayout/ProductsLayout';

const Products = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full">
            <Header />
            <div style={{width: "95%"}} className='flex '>
                <Filters />
                <ProductsLayout />
            </div>
        </div>
    )
}

export default Products;
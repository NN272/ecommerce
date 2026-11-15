import React from 'react'
import SearchInput from '../../common/SearchInput/SearchInput';
import ProductCard from '../../common/ProductCard/ProductCard';
import img from '../../../assets/ProductCard1.png'

const ProductsLayout = () => {
    return (
        <div style={{width: "70%"}}>
            <p className='text-base'>Home/Products</p>
            <p className='text-2xl font-bold'>PRODUCTS</p>
            <SearchInput />
            <div className='flex justify-around flex-wrap'>
                <ProductCard price="99" name="T-Shirt" category="T-Shirts" image={img} />
                <ProductCard price="99" name="T-Shirt" category="T-Shirts" image={img} />
                <ProductCard price="99" name="T-Shirt" category="T-Shirts" image={img} />
                <ProductCard price="99" name="T-Shirt" category="T-Shirts" image={img} />
                <ProductCard price="99" name="T-Shirt" category="T-Shirts" image={img} />
                <ProductCard price="99" name="T-Shirt" category="T-Shirts" image={img} />

            </div>
        </div>
    )
}

export default ProductsLayout;
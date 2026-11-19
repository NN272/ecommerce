import React from 'react'
import SearchInput from '../../common/SearchInput/SearchInput';
import ProductCard from '../../common/ProductCard/ProductCard';
import img from '../../../assets/ProductCard1.png'
import { selectProducts } from '../../../store/slices/productReducer';
import { useSelector } from 'react-redux';

const ProductsLayout = () => {
    const items = useSelector(selectProducts);

    return (
        <div style={{width: "70%"}}>
            <p className='text-base'>Home/Products</p>
            <p className='text-2xl font-bold'>PRODUCTS</p>
            <SearchInput />
            <div className='flex justify-around flex-wrap'>
                {items.products.map(item => <ProductCard id={item.id} price={item.price} name={item.name} category={item.label} image={item.image} />)}
            </div>
        </div>
    )
}

export default ProductsLayout;
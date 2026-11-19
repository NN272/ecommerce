import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productReducer';

const store =  configureStore({
    reducer: {
        products: productSlice
    }
});

export default store;
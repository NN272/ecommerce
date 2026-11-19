import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../assets/ProductCard3.png'
import img2 from '../../assets/BHWS.png'
import img3 from '../../assets/FSZ.png'
import img4 from '../../assets/LandingPhoto1.png'
import img5 from '../../assets/LandingPhoto2.png'
import img6 from '../../assets/NewItem4.png'
import img7 from '../../assets/NewItem3.png'
import img8 from '../../assets/ProductCard1.png'
import img9 from '../../assets/NewItem2.png'
import img10 from '../../assets/NewItem1.png'

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [
            {
                id: 1,
                name: "Embroidered Seersucker Shirt",
                label: "V-Neck T-Shirt",
                price: 99,
                color: null,
                section: "Home / New This Week",
                sizes: null,
                isInCart: false,
                image: img7
            },
            {
                id: 2,
                name: "Basic Slim Fit T-Shirt",
                label: "Cotton T Shirt",
                price: 99,
                color: "",
                section: "Home / New This Week",
                sizes: null,
                isInCart: false,
                image: img6
            },
            {
                id: 3,
                name: "Blurred Print T-Shirt",
                label: "Henley T-Shirt",
                price: 99,
                color: 3,
                section: "Home / New This Week",
                sizes: null,
                isInCart: false,
                image: img9
            },
            {
                id: 4,
                name: "Full Sleeve Zipper",
                label: "Crewneck T-Shirt",
                price: null,
                color: "#000",
                section: "Home / New This Week",
                sizes: null,
                isInCart: false,
                image: img3
            },
            {
                id: 5,
                name: "Basic Heavy Weight T-shirt",
                label: "Cotton T Shirt",
                price: 199,
                color: "#000",
                section: "Home / XIV Collections 23-24",
                sizes: null,
                isInCart: false,
                image: img10
            },
            {
                id: 6,
                name: "Soft Wash straight Fit Jeans",
                label: "Cotton jeans",
                price: 199,
                color: "#000",
                section: "Home / XIV Collections 23-24",
                sizes: null,
                isInCart: false,
                image: img5
            },
            {
                id: 7,
                name: "Basic Heavy Weight T-shirt",
                label: "Cotton T Shirt",
                price: 199,
                section: "Home / XIV Collections 23-24",
                sizes: null,
                isInCart: false,
                image: img8
            },
            {
                id: 8,
                name: "Basic Slim Fit T-Shirt",
                label: "Cotton T Shirt",
                price: 199,
                color: "cream / off-white",
                section: "Products listing",
                sizes: [
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "2X"
                ],
                isInCart: false,
                image: img1
            },
            {
                id: 9,
                name: "Basic Heavy Weight T-shirt",
                label: "Crewneck T-Shirt",
                price: 199,
                color: "black",
                section: "Products listing",
                sizes: [
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "2X"
                ],
                isInCart: false,
                image: img2
            },
            {
                id: 10,
                name: "Full Sleeve Zipper",
                label: "Cotton T Shirt",
                price: 199,
                section: "Products listing",
                sizes: [
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "2X"
                ],
                isInCart: false,
                image: img3
            },
            {
                id: 11,
                name: "Abstract Print T-Shirt",
                label: "Cotton T Shirt",
                price: 99,
                description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
                sizes: [
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "2X"
                ],
                section: "Product detail page",
                isInCart: false,
                image: img4
            },
        ]
    },
    reducers: {
        addProduct: (state, action) => {
            console.log("Product");
        },
        cartHandle: (state, action) => {
            console.log(action.payload);
            if(state.products[action.payload-1].isInCart == false) {
                state.products[action.payload-1].isInCart = true;
            } else {
                state.products[action.payload-1].isInCart = false;
            }
        }
    }
});

export const {addProduct, cartHandle} = productSlice.actions;
export const selectProducts = (state) => state.products;
export default productSlice.reducer;
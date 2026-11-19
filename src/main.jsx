import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/Home/App.jsx'
import Products from './pages/Products/Products.jsx'
import Item from './pages/Item/Item.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import CheckoutInfo from './components/layout/CheckoutInfo/CheckoutInfo.jsx'
import Cart from './pages/Cart/Cart.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/item" element={<Item />} />
        <Route path="/checkout" element={<Checkout />}>
          <Route path="information" element={<CheckoutInfo />} />
          <Route path="shipping" element={<CheckoutInfo />} />
          <Route path="payment" element={<CheckoutInfo />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)

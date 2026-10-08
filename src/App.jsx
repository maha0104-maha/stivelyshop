import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Search from './pages/Search'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import CategoriesMenu from './components/CategoriesMenu'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
function App() {
  
  return (
    <>
        {/* creating the routes for the website */}
        <BrowserRouter>
         <NavBar />
          <Routes>
              {/* home,serach,serach specific product with id,categories with name ,cart,checkout,order */}
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}/>
              <Route path="/category/:name" element={<Search />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
              <Route path="/categories" element={<CategoriesMenu />} />
              <Route path="/profile" element={<Profile />} />
               <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
  )
}

export default App

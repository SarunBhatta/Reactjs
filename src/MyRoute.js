import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import ProductdDetails from './pages/ProductdDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import CartItems from './Redux/CartItems'



const MyRoute = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Layouts/>}>
      <Route index element={<HomePage/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='productDetails/:productId' element={<ProductdDetails/>}/>
      <Route path ='cart' element={<Cart/>}/>
      <Route path='register' element={<Register/>}/> 
     <Route path='context' element={<Show/>}/>
     <Route path='redux' element={<CartItems/>}/>
    
    </Route>
    </Routes>
    </Router>
  )
}
export default MyRoute

import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductdDetails = () => {
const[product, setProduct] = useState({})
const params= useParams()
const id=params.productId
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then(res=>setProduct(res.data))
  .catch(err=>console.log(err))
},[id])
 const addToCart=()=>{

  const CartItems= JSON.parse(localStorage.getItem('cartData')) || []
  const productItem={
    id: product.id,
    title:product.title,
    price:product.price ,
    description:product.description,
    image:product.image,
    quantity:1
  }
// check if the item is present in the cart or not
const existingItem=CartItems.find(item=>item.id=== product.id)
if(existingItem){
  toast.error('Item is already in the cart')
}
else{
  CartItems.push(productItem)
  localStorage.setItem('cartData',JSON.stringify(CartItems))
  toast.success('Item added to cart successfully')
}

 }
  return (
    <>
    <ToastContainer theme='colored' position='top-center' />
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3">
            <img src= {product.image} alt={product.title} width={200} />
          </div>
          <div className="col-md-8">
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <p className='text-info'> <strong> Category: </strong>{product.category}</p>
            <div className="my-3">
             <button className='btn btn-warning' onClick={addToCart}> Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductdDetails

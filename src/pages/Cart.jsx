import React,{useState,useEffect} from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
const[products,setProducts]=useState([])
useEffect(()=>{
    const cartData= JSON.parse(localStorage.getItem('cartData'))
    setProducts(cartData)
},[])

// increase quantity
const increaseQty =(id)=>{
  const updateProduct =products.map(item=>{
    if(item.id===id){
      return{...item,quantity: item.quantity+1}
    }
    return item 
  })
  setProducts(updateProduct)
  localStorage.setItem('cartData', JSON.stringify(updateProduct))
}

//decrease quantity
const decreaseQty =(id)=>{
  const updateProduct =products.map(item=>{
    if(item.id===id && item.quantity>1){
      return{...item,quantity: item.quantity-1}
    }
    return item 
  })
  setProducts(updateProduct)
  localStorage.setItem('cartData', JSON.stringify(updateProduct))
}

// delete quantity

const removeCartItem =(id,name)=>{
  const confirmed = window.confirm('Are you sure you want to delete this item/product from the cart?')
  if(confirmed){
    const filterCart= products.filter(item=>item.id!==id)
    localStorage.setItem('cartData',JSON.stringify(filterCart))
    setProducts(filterCart)
    toast.success(`${name} is removed from the cart successfully`)
  }
}
  return (
    <>
       <ToastContainer theme='colored' position='top-center' />
    <div className='container'>
      <div className="row d-flex justify-content-between my-5">
      {products.length === 0 ?
      <h2 className='text-center'> Your cart is empty.</h2>
      :(
        <>
        <h2 className='text center'>Your Cart Items</h2>
        <div className="col-md-8 shadow">
          {products.map((item,i) =>(
            <div key ={i}>
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <img src={item.image} alt={item.image}  width={80}/>
              </div>
              <div className="col-2">
                <strong>{item.title}</strong>
              </div>
              <div className="col-2 text-primary">
                ${item.price}
              </div>
              <div className="col-3">
                <button className='btn btn-success' onClick={()=>increaseQty(item.id)}>+</button>
                &nbsp;
                <span>{item.quantity}</span>
                &nbsp;
                <button className='btn btn-danger' onClick={()=>decreaseQty(item.id)}>-</button>
                &nbsp;
              </div>
              <div className="col-1">
                {/* <div className="btn btn-danger">Delete</div> */}

                <DeleteOutlined className="btn btn-primary" onClick={() => removeCartItem(item.id,item.title)}/>
              </div>
             </div>              
            </div>
          ))}
        </div>
        <div className="col-md-3 shadow p-3">
       <h4> Cart Summary</h4>
       <p> <strong>  Units:</strong> {products.reduce((ac,item)=>(ac+item.quantity),0)} </p>
  
       <p> <strong>  Total:</strong>{products.reduce((ac,item)=>(ac+(item.price*item.quantity)),0)}</p>
       <button className='btn btn-warning'>Check Out</button>
        </div>
        </>
      )} 
    </div>
    </div>
    </>
  )}

export default Cart

import React,{useState,useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    
    
  axios.get(`https://fakestoreapi.com/products`)
  .then(res=>{
    setProducts(res.data)
  })
  .catch(err=>console.log(err))
  },[])
  return (
    <>
     <div classNameName="container-fluid my-3">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map(item=>(
      <Card data ={item}/>
       ) )}

        </div>
        </div>
    </>
  )
}

export default Products

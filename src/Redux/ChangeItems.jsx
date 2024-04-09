import React from 'react'
import { useDispatch } from 'react-redux'


const ChangeItems = () => {
    const Dispatch =useDispatch()
    const add=()=>{
        Dispatch({type: 'ADD_TO_CART'})

    }
  return (
    <>

    <div className='my-3'>
        <div className='row d-flex justify-content-around'>
            <div className="col-3">
                <button className='btn btn-warning' onClick={add}>Add</button>
            </div>
            <div className="col-3">
                <button className='btn btn-danger'>Reduce</button>
            </div>
        </div>
    </div>  
    </>
  )
}
export default ChangeItems

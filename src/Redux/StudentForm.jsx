import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'

const StudentForm = () => {
    const[name ,setName]=  useState('')
    const dispatch =useDispatch()
    const change=()=>{
        dispatch({type:'CHANGE_NAME', payload: name})
    }

  return (
    <>
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
            <div className="col-md-3">
                <input type="text" name='name' className='form-control' onChange={e=>setName(e.target.value)} />
                <button className='btn btn-info' onClick={change}> Submit </button>
            </div>

        </div>


      </div>
    </>
  )
}

export default StudentForm

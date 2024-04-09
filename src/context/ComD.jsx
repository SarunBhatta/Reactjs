import React,{useContext} from 'react'
import { Global } from './GlobalContext'

const ComD = () => {
  const data= useContext(Global)
  return (
    <>
      
      {/* <h3>We are Learning {data}.</h3> */}
      <h3>The name of student is {data.name}</h3>
      <h3>The age of the student is {data.age}</h3>
    </>
  )
}

export default ComD

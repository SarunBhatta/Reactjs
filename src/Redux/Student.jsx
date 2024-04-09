import React from 'react'
import {useSelector} from 'react-redux'
import StudentForm from './StudentForm'

const Student = () => {
    const data =useSelector(store=> store.student)
  return (
    <>
    <h2>The name of the student is {data.name}.</h2>
    <StudentForm/>
    </>
  )
}

export default Student

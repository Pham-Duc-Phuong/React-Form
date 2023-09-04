import React from 'react'
import Header from './Header'
import FormTable from './FormTable'
import FormInput from './FormInput'

const IndexForm = () => {
  return (
    <div>
        <Header/>   
        <h1 className='text-center my-3 text-warning bg-dark container p-2'>Quản lý sinh viên</h1>
        <div className='container'>
        <FormInput/>
        <FormTable/>
        </div>
    </div>
  )
}

export default IndexForm
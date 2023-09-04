import React, { useState } from 'react'

const FormInput = () => {
    const [formValue, setFormValue] = useState()
    console.log('formValue', formValue)
    return (
        <div>
            <form className='form-control'
                noValidate
                onSubmit={(event) => {
                    event.preventDefault()
                    console.log('submit');
                }} >
                <div className="row">
                    <div className="col-6 my-2">
                        <p>Mã số sinh viên:</p>
                        <input className='form-control' type="text" onChange={()=>{
                            
                        }}/>
                    </div>
                    <div className="col-6 my-2">
                        <p>Tên sinh viên:</p>
                        <input className='form-control' type="text" />
                    </div>
                    <div className="col-6 my-2">
                        <p>Hình ảnh:</p>
                        <input className='form-control' type="text" />
                    </div>
                    <div className="col-6 my-2">
                        <p>Email:</p>
                        <input className='form-control' type="text" />
                    </div>
                    <div className="col-6 my-2">
                        <p>Số điện thoại:</p>
                        <input className='form-control' type="text" />
                    </div>
                    <div className="col-6 my-2">
                        <p>Số tín chỉ hoàn thành:</p>
                        <input className='form-control' type="text" />
                    </div>
                </div>
                <button className='btn btn-warning my-2 fw-bolder'>Đăng ký</button>
            </form>
        </div>
    )
}

export default FormInput
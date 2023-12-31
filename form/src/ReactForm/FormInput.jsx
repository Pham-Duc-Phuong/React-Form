import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { formReactActions } from '../store/FormReact/slice'
const FormInput = () => {
    const [formValue, setFormValue] = useState()
    const [formError, setFormError] = useState()
    const dispatch = useDispatch()
    const {DssvEdit} = useSelector(state => state.formReact)
    const validate = (elements) => {
        const { validity, title, minLength } = elements
        const { valueMissing, tooShort, patternMismatch } = validity
        let mess = ''
        if (valueMissing) {
            mess = `Vui lòng nhập ${title}`
        } else if (tooShort) {
            mess = `${title} cần tối thiểu ${minLength} ký tự`
        } else if (patternMismatch) {
            mess = `Vui lòng nhập đúng ${title}`
        }
        return mess
    }
    const handleFormValue = () => (event) => {
        const {value, name} = event.target
        let mess = validate(event.target)
        setFormValue({
            ...formValue,
            [name]: value,
        })
        setFormError({
            ...formError,
            [name]: mess
        })

    }
    useEffect(()=>{
        if(!DssvEdit) return
        setFormValue(DssvEdit)
    },[DssvEdit])
    return (
        <div>
            <form className='form-control'
                noValidate
                onSubmit={(event) => {
                    event.preventDefault()
                    const elements = document.querySelectorAll('input')
                    let errors = {}
                    elements.forEach(item => {
                        const { name, value, validity, title, minLength } = item
                        errors[name] = validate(item)
                    })
                    setFormError(errors)
                    let noSubmit = false
                    for (let key in errors){
                        if (errors[key]){
                            noSubmit = true
                            break
                        }
                    }
                    if (noSubmit) return
                    if (!DssvEdit){
                        dispatch(formReactActions.addSV(formValue))
                    } else {
                        dispatch(formReactActions.updateDssv(formValue))
                    }
                }} >
                <div className="row">
                    <div className="col-6 my-2">
                        <p>Mã số sinh viên:</p>
                        <input className='form-control' type="text"
                            value={formValue?.maSV || ''}
                            required
                            title='mã số sinh viên'
                            name='maSV'
                            onChange={handleFormValue()}
                            minLength={7}
                            pattern='^[0-9]+$'
                        />
                        {formError?.maSV && <p className='text-danger m-0 pt-2'>{formError.maSV}</p>}
                    </div>
                    <div className="col-6 my-2">
                        <p>Tên sinh viên:</p>
                        <input className='form-control' type="text"
                            value={formValue?.tenSV || ''}
                            required
                            title='tên sinh viên'
                            name='tenSV'
                            onChange={handleFormValue()}
                            pattern='^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$'
                        />
                        {formError?.tenSV && <p className='text-danger m-0 pt-2'>{formError.tenSV}</p>}
                    </div>
                    <div className="col-6 my-2">
                        <p>Hình ảnh:</p>
                        <input className='form-control' type="text"
                            value={formValue?.image || ''}
                            required
                            title='hình ảnh'
                            name='image'
                            onChange={handleFormValue()}
                        />
                        {formError?.image && <p className='text-danger m-0 pt-2'>{formError.image}</p>}
                    </div>
                    <div className="col-6 my-2">
                        <p>Email:</p>
                        <input className='form-control' type="text"
                            value={formValue?.email || ''}
                            required
                            title='email'
                            name='email'
                            pattern='^[a-zA-Z0-9.%+\-]+@([a-zA-Z0-9])+\.[a-z]{2,}$'
                            onChange={handleFormValue()}
                        />
                        {formError?.email && <p className='text-danger m-0 pt-2'>{formError.email}</p>}
                    </div>
                    <div className="col-6 my-2">
                        <p>Số điện thoại:</p>
                        <input className='form-control' type="text"
                            value={formValue?.phone || ''}
                            required
                            title='số điện thoại'
                            name='phone'
                            pattern='^[0-9]+$'
                            onChange={handleFormValue()}
                        />
                        {formError?.phone && <p className='text-danger m-0 pt-2'>{formError.phone}</p>}
                    </div>
                    <div className="col-6 my-2">
                        <p>Số tín chỉ hoàn thành:</p>
                        <input className='form-control' type="text"
                            value={formValue?.stc || ''}
                            required
                            title='số tín chỉ hoàn thành'
                            name='stc'
                            pattern='^[0-9]+$'
                            maxLength={3}
                            onChange={handleFormValue()}
                        />
                        {formError?.stc && <p className='text-danger m-0 pt-2'>{formError.stc}</p>}
                    </div>
                </div>
                <button className='btn btn-warning my-2 fw-bolder'>Đăng ký</button>
            </form>
        </div>
    )
}

export default FormInput
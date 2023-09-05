import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formReactActions } from '../store/FormReact/slice'

const FormTable = () => {
  const { Dssv } = useSelector(state => state.formReact)
  const dispatch = useDispatch()
  return (
    <div>
      <table className='table mt-5'>
        <thead className='table-dark'>
          <tr>
            <th>Mã Số SV</th>
            <th>Tên SV</th>
            <th>Ảnh</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Số Tín Chỉ</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {
            Dssv.map(item =>
              <tr key={item.maSV}>
                <td>{item?.maSV}</td>
                <td>{item?.tenSV}</td>
                <td><img style={{width:100}} src={item?.image} alt="" /></td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.stc}</td>
                <td><button className='btn btn-success me-3' onClick={()=>{
                   dispatch(formReactActions.editDssv(item))
                }}>Edit</button><button className='btn btn-danger' onClick={()=>{
                  dispatch(formReactActions.deleteSV(item))
                }}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default FormTable
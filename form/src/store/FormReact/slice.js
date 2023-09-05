import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    Dssv: [],
    DssvEdit: undefined
}
const formReactSlice = createSlice({
    name: 'formReact',
    initialState,
    reducers: {
        addSV: (state, {payload}) => {
            state.Dssv.push(payload)
        },
        deleteSV: (state, {payload}) => {
            state.Dssv = state.Dssv.filter(item => item.maSV !== payload.maSV )
        },
        editDssv: (state, {payload}) => {
            state.DssvEdit = payload
        },
        updateProduct: (state, {payload}) => {
            state.Dssv.map((item) => {
                if (item.maSV === payload.maSV){
                    return payload
                }
                return item
            })
            state.DssvEdit= undefined
        }
    }
})
export const { reducer: formReactReducer, actions: formReactActions } = formReactSlice
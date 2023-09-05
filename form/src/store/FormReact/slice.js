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
        }
    }
})
export const { reducer: formReactReducer, actions: formReactActions } = formReactSlice
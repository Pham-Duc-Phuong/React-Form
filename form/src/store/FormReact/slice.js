import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    Dssv: []
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
        }
    }
})
export const { reducer: formReactReducer, actions: formReactActions } = formReactSlice
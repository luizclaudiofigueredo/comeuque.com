import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'empresa',
    initialState: {
        delivery: '',
    },
    reducers: {
        setEmpresa(state, {payload}) {
            return { ... state, delivery: payload }
        }
    }
})

export const { setEmpresa } = slice.actions

export const selectEmpresa = state => state.empresa

export default slice.reducer
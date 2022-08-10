import { configureStore } from "@reduxjs/toolkit";

import empresaReducer from './empresaSlice'

export default configureStore({
    reducer: {
        empresa: empresaReducer,
    }
})
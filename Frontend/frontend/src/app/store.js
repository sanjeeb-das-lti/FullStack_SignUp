import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/login/loginSlice'

export const store = configureStore({
    reducer: loginReducer,
})
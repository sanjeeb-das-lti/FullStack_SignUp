import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginData: {
        firstname: '',
        lastname: '',
        userid: 0
    }
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            if (action.payload.userid > 0) {
                state.loginData.firstname = action.payload.firstname,
                    state.loginData.lastname = action.payload.lastname,
                    state.loginData.userid = action.payload.userid
            }
        }
    }

})

export const { loadUser } = loginSlice.actions

export default loginSlice.reducer
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status: false,
    useData: null 
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.usera = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

// Slice

export const slice = createSlice({
    name: 'authentication',
    initialState: {
       isLogin: false,
       accessToken:"",
       refreshToken: ""
    },
    reducers: {
        setAuthentication: (state, action) => {
            state.isLogin = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
    },
});

export const { setAuthentication } = slice.actions;



export default slice.reducer
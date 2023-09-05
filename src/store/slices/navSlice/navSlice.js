import { createSlice } from '@reduxjs/toolkit';

// VARIABLES QUE SE UTILIZARAN COMO ESTADO INICIAL 
const initialState = {
    navState: "",
    message:""
}

// CREACION DE TODAS LAS ACCIONES QUE SE PUEDEN TOMAR DEPENDIENDO DEL RESULTADO D ELA CONSULTAK
export const navSlice = createSlice({
    name: 'nav',
    initialState: initialState,
    reducers: {
        setNavState: (state, action) => {
          state.navState = action.payload;
        },
        setMessage: (state, action) => {
          state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
      builder
    }
});


export default navSlice.reducer;

export const { setNavState, setMessage } = navSlice.actions
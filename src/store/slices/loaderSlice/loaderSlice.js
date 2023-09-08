import { createSlice } from '@reduxjs/toolkit';

// VARIABLES QUE SE UTILIZARAN COMO ESTADO INICIAL 
const initialState = {
    loadState: false,
    message:""
}

// CREACION DE TODAS LAS ACCIONES QUE SE PUEDEN TOMAR DEPENDIENDO DEL RESULTADO D ELA CONSULTAK
export const loadSlice = createSlice({
    name: 'load',
    initialState: initialState,
    reducers: {
        setLoaderTrue: (state) => {
          state.loadState = true;
        },
        setLoaderFalse: (state) => {
          state.loadState = false;
        },
        setMessageLoader: (state, action) => {
          state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
      builder
    }
});


export default loadSlice.reducer;

export const { setLoaderTrue, setLoaderFalse, setMessageLoader } = loadSlice.actions
import { redirect } from "react-router-dom";
import {createSlice} from '@reduxjs/toolkit'

const server = createSlice({
    name:'server',
    initialState:{
        error : false,
        errorMensaje : '',
    },
    reducers:{
        crearError: (state, newState)=>{
            const error         = newState.payload.error
            const errorMensaje  = newState.payload.errorMensaje
            if (error != undefined && error != '' && errorMensaje != '' && errorMensaje != undefined){
                state.error = error
                state.errorMensaje = errorMensaje
                return redirect('/')
            }
        },
        cerrarError: (state, newState) => {
            state.error = false
            state.errorMensaje = ''
        }
    }
})

export const {crearError, cerrarError} = server.actions

export default server.reducer
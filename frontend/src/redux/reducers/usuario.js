import { createSlice } from '@reduxjs/toolkit'

const usuario = createSlice({
    name: 'usuario',
    initialState: {
        tipoUsuario: '',
        username: '',
        contrasenya: '',
    },
    reducers: {
        cambiarTipoUsuario: (state, newState) => {
            state.tipoUsuario = newState.payload
        }
    }
})

export const { cambiarTipoUsuario } = usuario.actions

export default usuario.reducer
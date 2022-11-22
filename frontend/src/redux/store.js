import { configureStore } from '@reduxjs/toolkit'
import usuario from './reducers/usuario'
import server from './reducers'

export const store = configureStore({
  reducer: {
    usuario: usuario,
    server: server,
  },
})
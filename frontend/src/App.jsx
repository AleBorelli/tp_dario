import {PreceptoresNavbar} from './components/navbars/Preceptores'
import {useSelector} from 'react-redux'
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Login from './components/Pages/index'
import ListaAlumnos from './components/listas/alumnos';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/Pages/MainPage';
import Error from './components/Pages/Error'

function App(){
  const estado =  useSelector((state) => state.usuario)
  const servidor = useSelector(state => state.server)
  if (servidor.error === true) {
    redirect('/error')
  }

  return(
    <>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path = '/' element ={<MainPage/>}/>
      <Route path = '/error' element ={<Error/>}/>
      <Route path = '' element = {<ListaAlumnos/>}/>
      <Route path = '/Login' element = {<Login tipoUsuario = {estado.tipoUsuario} nombre={estado.nombre}/>}/>
    </Routes>
  </BrowserRouter>
    
    
    </>

  )
}


export default App;
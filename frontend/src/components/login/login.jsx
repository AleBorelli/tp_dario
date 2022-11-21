import axios from "axios";
import {useDispatch} from 'react-redux'
import {useState} from 'react'

import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

const LoginForm = () => {

    const [user, setUser] = useState('')
    const [contra, setContra] = useState('')
    const [enviar, setEnviar] = useState(false)
    useEffect(()=>{
        if(enviar){
            axios.post('/usuarios/validarUsuario',{
                usuario: user, contrasenya: contra
            }).then((retorno)=>{
                console.log(retorno);
            })
        }
    },[enviar])
    return(
        <Container className='justify-content-center h-50 w-50'>
        <form action='/usuario/validarUsuario' method='post'>
            <MDBInput className='mb-4 mt-4' type='email'      name='usuario'     placeholder='Usuario' onChange={(dato) => setUser(dato)}/>
            <MDBInput className='mb-4'      type='password'   name='contrasenya' placeholder='Contraseña' onChange={(data)=> setContra(data)}/>

            <MDBBtn type='submit' block onSubmit={()=>{setEnviar(true)}} className='position-relative top-50 start-50 mb-4 mt-4 translate-middle'>
                Sign in
            </MDBBtn>
        </form>
    </Container>
    )
}

export default LoginForm
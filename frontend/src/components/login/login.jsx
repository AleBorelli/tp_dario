import axios from "axios";
import { useState } from 'react'

import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useForm } from "../../hooks/useForm";
import { urlBase } from "../../config/config";

const LoginForm = () => {


    const { formData, handleOnChange, resetForm } = useForm({
        username: '',
        password: ''
    })

    const { username, password } = formData;


    const enviarDatos = async (e) => {
        e.preventDefault()
       
        axios.post(`${urlBase}/usuarios/validarUsuario`, {
            usuario: username, contrasenya: password
        }).then((retorno) => {
            console.log(retorno);
        })

        resetForm()
    }


    return (
        <Container className='justify-content-center h-50 w-50'>
            <form action='/usuario/validarUsuario' method='post'
            onSubmit={enviarDatos}
            >
                <MDBInput
                    className='mb-4 mt-4'
                    type='email'
                    placeholder='Usuario'
                    name='username'
                    value={username}
                    onChange={handleOnChange} />

                <MDBInput className='mb-4'
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Contraseña'
                    onChange={handleOnChange} />

                <MDBBtn
                    type='submit'
                    block
                    className='position-relative top-50 start-50 mb-4 mt-4 translate-middle'>
                    Sign in
                </MDBBtn>
            </form>
        </Container>
    )
}

export default LoginForm
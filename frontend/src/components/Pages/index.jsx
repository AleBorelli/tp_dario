import { useDispatch } from "react-redux";
import { crearError } from "../../redux/reducers";
import LoginForm from '../login/login'
import FondoPreceptor from "../fondos/Preceptor";
import { useEffect } from "react";


const Login = (props) => {
     const distpach = useDispatch()
     useEffect(()=>{
        const miau = 'miau'
        if (props.nombre !== undefined || props.tipoUsuario === undefined || miau === 'miau') {
            distpach(crearError({error: true, errorMensaje: 'Usted ya ha iniciado sesión anteriormente.'}))
            
        }
     },[])
    
    return(
        <>
            <FondoPreceptor/>
            <LoginForm/>
        </>        
    )
}

export default Login
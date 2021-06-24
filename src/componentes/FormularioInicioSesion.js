import React, {useState} from 'react';
import style from './FormularioInicioSesion.module.css';
import Boton from './../elementos/Boton';
import styled, {css} from 'styled-components';


const FormularioInicioSesion = (AQUIPROPIEDAD) => {

    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    // const onChangeUsuario = (e) => {
    //     cambiarUsuario(e.target.value);
    // };

    // const onChangePassword = (algo) => {
    //     cambiarPassword(algo.target.value);
    // };
    


    // funcion global para validar formularios
    const onChange = (evento) => {
         if(evento.target.name === 'usuario') {
            cambiarUsuario(evento.target.value);
         } else if(evento.target.name === 'password') {
            cambiarPassword(evento.target.value);
         }
    }


    // funcion onSubmit para cuando el usuario aprieta el boton se Iniciar Sesion
    const onSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'David' && password === '123') {
            AQUIPROPIEDAD.propiedadAlgo(true);
        } else {
            alert('datos mal cargados!');

            // poner el blanco nuevamente usuario y password
            cambiarUsuario('');
            cambiarPassword('');
        }
    }


    return ( 
        // retornaremos un formulario 
        <form action="" onSubmit={onSubmit} className={style.formulario}>

            {/* para que muestre en pantalla lo que estor escribiendo en los input */}
            {/* <p>Usuario:  {usuario}</p> */}
            {/* <p>Contraseña:  {password}</p> */}

            <h1>No iniciaste Session!</h1> 

            <div>
                <label htmlFor="usuario" className='label'>Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className={style.input}
                />
            </div>

            <div>
                <label htmlFor="password" className='label'>Contraseña</label>
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    className={style.input}
                />
            </div>

            {/* asi se haria si lo hicieramos con clases */}
            {/* <button type='submit' className={style.boton}>Iniciar Sesion</button> */}

            {/* y asi con componentes donde le podemos pasar un argumento para que sea dinámico */}
            <div>
               <Boton largo type='submit'>Iniciar Sesion</Boton>
            </div>   
        </form>
     );
}
 
export default FormularioInicioSesion;
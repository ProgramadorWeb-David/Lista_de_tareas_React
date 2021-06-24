import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';


// CREANDO UN COMPONENTE!  :  es una funcion flecha, la primera letra siempre va en mayuscula, debe tener un return
const Usuario = () => {
    let pais = 'Argentina';
    const nombre = prompt('Ingrese nombre');
    const name = prompt('SALUDAR A:');
    const amigos = ['Juanma ', 'Ema ', 'Fede '];

    return (
      <div>
        <h3>Has iniciado Session!</h3> 
        <Titulo usuario= {name} />
        <Titulo usuario='Leonel' color='green' />
        <Parrafo>Aguante colon de santa fe!</Parrafo>
        <Parrafo>Yo soy de Práctica</Parrafo>
        <p>desde {pais}</p>
        {nombre && <p style={{color: 'red'}}>tu nombre es: {nombre}</p>}  
  
        <ul>
          { amigos.map( (algo, index) => {
             return <li key={index}> {algo} </li>
          }) }
        </ul>
     </div>
    );
  };


  const Parrafo = styled.p`
      margin: 20px 0px;
      color: violet;
  `;

  // para exportar Usuario
  export default Usuario;


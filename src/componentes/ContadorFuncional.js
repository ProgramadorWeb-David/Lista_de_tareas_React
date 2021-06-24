import React, { useState, useEffect } from 'react';
import style from './ContadorFuncional.module.css';

const ContadorFuncional = () => {

    // para cambiar el estado de algo, en este casi de useState que por defecto está en cero
    const [anterior, ahora] = useState(0);


    // useEffect para que se ejecute siempre que el componente se renderize
    useEffect( () => {
        console.log('Me ejecuto cada vez que se renderiza el componente!');
    });


    // los "[]" son para que cargue por única vez
    useEffect( () => {
        console.log('Solo funciono a la primera!');
    }, []);


    // funcion de tipo flecha para incrementar
    const incrementar = (e) => {
        ahora(anterior + e);    
    }

    // funcion de tipo flecha para decrementar
    const decrementar = (e) => {
        ahora(anterior - e);
    }

    return ( 
        <div>
            <h1>ContadorComponente:  {anterior}</h1>

             {/* en éste caso incrementará y decrementará de 1 en 1 por eso le pasamos el valor de "1" */}
            <button negro className = {style.boton} onClick={ () => incrementar(1) }>Incrementar</button>
            <button negro className = {style.boton} onClick={ () => decrementar(1) }>Decrementar</button>
        </div>
     );
}
 
export default ContadorFuncional;
import React, {useReducer} from 'react';
import Boton from './../elementos/Boton';

// Éste es el estado inicial
const estadoInicial = {contador: 0};


// Reducer
const reducer = (estado, accion) => {
    switch(accion.tipo) {
        case 'INCREMENTAR':
            return {contador: estado.contador + 1};
            break;

        case 'DECREMENTAR':
            return {contador: estado.contador - 1};
            break;

        case 'REINICIAR':
            return {contador: 0};
            break;

        default:
            return estado;    
    }
};


const EjemploUseReducer = () => {

    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    return ( 
        <div>
            <h1>ContadorReducer:  {estado.contador}</h1>

             {/* en éste caso incrementará y decrementará de 1 en 1 */}
            <Boton negro onClick={ () => dispatch({tipo: 'INCREMENTAR'}) }>Incrementar</Boton>
            <Boton negro marginLeft onClick={ () => dispatch({tipo: 'DECREMENTAR'}) }>Decrementar</Boton>
            <Boton negro marginLeft onClick={ () => dispatch({tipo: 'REINICIAR'}) }>Reiniciar</Boton>
        </div>
     );
};
 
export default EjemploUseReducer;
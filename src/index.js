import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorClass from './componentes/ContadorClass';
import ContadorFuncional from './componentes/ContadorFuncional';
import './index.css';
import Boton from './elementos/Boton';
import EjemploUseReducer from './componentes/EjemploUseReducer';
import Blog from './componentes/Blog';


// simular un sistema de loguin, si se loguea le muestra la bienvenida sino le muestra otro mensaje


// COMPONENTE EN REACT
const App = () => {

  const [sesion, cambiarEstadoSesion] = useState(true);

    return (
      <div className='contenedor'>
        { sesion === true ? 
          <>
             <Usuario/>
             {/* <Usuario/> */}

             {/* éste es un componente con class como se hacia antes... */}
             {/* <ContadorClass/> */}

             <hr />

             {/* ejemplo de un Blog echo con HOOK PERSONALIZADO */}
             <Blog/>

             <hr />

             {/* y asi es como se hace ahora... */}
             {/* <ContadorFuncional/> */}

             {/* ejemplo con hook de reducer */} 
             <EjemploUseReducer/>

             {/* <button onClick={() => {
               cambiarEstadoSesion(false);
             }}>Cerrar Sesion</button> */}

             {/* usamos la etiqueta con estilos que creamos como un componente */}
             <Boton largo marginTop onClick={() => {
               cambiarEstadoSesion(false);
             }}>Cerrar Sesion</Boton>

          </>
          : 
          <>
            
            <FormularioInicioSesion propiedadAlgo={cambiarEstadoSesion}/>

           {/* 
              <button onClick={() => {
                cambiarEstadoSesion(true);
              }}>Iniciar Sesion</button>
            */}

          </>
        }
      </div>
    );
};


// const verificarSession = (session) => {
//       if (session === true) {
//         return jsx;
//       } else {
//         return <h3>No has iniciado session!</h3>
//       }
// }


// ReactDOM.render(<h1>Hello World - desde react!</h1>, document.getElementById('root'));

// ReactDOM.render(verificarSession(session), document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));


import React from 'react';


const Titulo = ({usuario = 'porDefecto', color = 'gray'}) => {
    return ( <h1 className='titulo' style={{color: color}} >Hello {usuario}</h1> );
}

// para exportar 2 o mas componentes
export {Titulo};


// para exportar 1 solo seria:
// export default Titulo; 


import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import useObtenerArticulos from './../hooks/useObtenerArticulos';


const Blog = () => {

    const [pasado, cargando] = useObtenerArticulos();

    return ( 
        <ContenedorBlog>
            <Titulo>Blog Personalizado</Titulo>

            {cargando === true ? 
                  <p>Cargando...</p>
                :
                  <div>
                    {pasado.map( (algo) => {
                    return <Articulo key={algo.id}>{algo.titulo}</Articulo>
                    })}
                  </div>      
            }  
            
        </ContenedorBlog>
     );
}

// dandole estilos aqui, pero sabes que se hace separado
const ContenedorBlog = styled.div`
    margin: 40px 0 20px 0;
`;

const Titulo = styled.h2`
   margin-bottom: 10px;
`;

const Articulo = styled.p`
   padding: 10px 0;
   margin-bottom: 10px;
   border-bottom: 1px solid #ccc;
`;
 
export default Blog;
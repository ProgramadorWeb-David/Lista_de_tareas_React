import React, {useEffect, useState} from 'react';


const useObtenerArticulos = () => {

    const [pasado, actual] = useState([]);
    const [cargando, establecerCargando] = useState(true);

    useEffect( () => {
       setTimeout( () => {
           
            actual([
               {
                   id: 1,
                   titulo: 'Título del primer artículo'
               },
               {
                    id: 2,
                    titulo: 'Título del segundo artículo'
               },
               {
                    id: 3,
                    titulo: 'Título del tercero artículo'
               }
           ]);

           establecerCargando(false);

       }, 3000);
    }, []);


    return [pasado, cargando];
}
 
export default useObtenerArticulos;
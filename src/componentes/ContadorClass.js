import React, {Component} from 'react';

// ASI SE HACIAN LOS COMPONENTES CON CLASES ANTES!!!  YA NO SE TRABAJA ASI PERO ES A MODO DE EJEMPLO:

class Contador extends Component {

    // poner funcionalidad a este componente de clase
    constructor(props) {
        super(props);

        // el estado
        this.state = { conta : 0 };
    }


    // metodos
    incrementar() {
        this.setState( (estadoAnterior) => {
             return {
                 conta : estadoAnterior.conta + 1
             }
        } );
    }

    decrementar() {
        this.setState( (loQueSea) => {
            return {
                conta : loQueSea.conta - 1
            }
       } );
    }

    render() {
        return (
            <div>
                <h1>Contador:  {this.state.conta}</h1>

                <button onClick={ () => this.incrementar() }>Incrementar</button>
                <button onClick={ () => this.decrementar() }>Decrementar</button>
            </div>
        );
    }
}


export default Contador;
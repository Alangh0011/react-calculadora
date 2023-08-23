import React from 'react';
import '../styles/Boton.css';

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
        //Siempre y cuando se cumplan las 3 dara true 
    };

return (
    <div
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}>
            {/*necesitamos ver si es un operador, vemos si es operador 
            si es asi le daremos otro estilo, pero si no solo se queda
            con el estilo de boton-contenedor
            
            trimEnd() es para eliminar el espacio de "boton-contenedor ${esOperador"
            
            
            el props que pasa es de app.js que es ManejarClick con un valor, cuando de click retornara el valor que paso como
            argumento 

            const calcularResultado = () => {
            setInput(evaluate(input));//evaluate es paqueteria de math
            }
            */}

            

        {props.children}{/* aqui pasara el numero de app.js 
        y con el children*/}
    </div>
    );
}

export default Boton;
import React from 'react';



const Button = (props)=> 
{
    const {consultaEndereco} = props;

    return <div>
        <button class="btn btn-secondary" onClick={consultaEndereco} >Consultar CEP</button>
    </div>
}


export default Button;
import React from 'react';



const Lista = (props)=> 
{
    const {cep, logradouro, complemento, bairro, localidade, uf} = props.dados;

    console.log(props);

    
    return  <div class="mt-3">
                <ul class="list-group">
                    <li class="list-group-item active">Informações</li>
                    <li class="list-group-item"><b>CEP:</b> {cep}</li>
                    <li class="list-group-item"><b>Endereço:</b> {logradouro}</li>
                    <li class="list-group-item"><b>Complemento:</b> {complemento}</li>
                    <li class="list-group-item"><b>Bairro:</b> {bairro}</li>
                    <li class="list-group-item"><b>Cidade:</b> {localidade}</li>
                    <li class="list-group-item"><b>UF:</b> {uf}</li>
                </ul>
            </div>
}


export default Lista;
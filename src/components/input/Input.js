import React from 'react';



const Input = (props)=> 
{
    const {setValorCEP} = props;

    return <div class="form-group">
        <input class="form-control" type="text" onChange={setValorCEP} />
    </div>
}


export default Input;
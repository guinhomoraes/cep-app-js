import './App.css';
import Button from './components/button/Button';
import List from './components/conteudo/List';
import Input from './components/input/Input';
import axios from 'axios';
import React, {useState} from 'react';


const App = () => 
{

  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');

  const retornaEndereco = () =>
  { 
    if(cep.length > 7)
    {
     
       axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        const endereco = res.data;

        setEndereco(endereco);
        
      });
    }
    else
    {
       alert("CEP incorreto");
    }
  }

  const setValorCEP = (evento) => 
  {
     setCep(evento.target.value);
  }

  return (
    <div>
          <div class="card">
              <div class="card-header">
                CEP Api
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between"> 
                  <Input setValorCEP={setValorCEP}/>
                  <Button consultaEndereco = {retornaEndereco} />
                </div>
                <List dados = {endereco}/>
              </div>
          </div>
          
    
    </div>
  );
}

export default App;

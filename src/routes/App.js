// App.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css'
const App = () => {

  const [nome, setNome] = useState('');
  const [pedido, setPedido] = useState('');
  const [qrcodeData, setQRCodeData] = useState(null);
  const [scannedData, setScannedData] = useState(null);

  const pedidoData = {
    id: 123,
    nome: 'Exemplo',
    descricao: 'Pedido de exemplo',
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crie um objeto JSON com as informações do pedido
    const orderData = {
      nome,
      pedido,
    };

    // Converta o objeto JSON em uma string
    const jsonString = JSON.stringify(orderData);

    // Atualize o estado do QRCodeData
    setQRCodeData(jsonString);
  };

  const handleScan = (data) => {
    if (data) {
      // Atualize o estado com os dados escaneados
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const confirmaNome = (err) => {
    err.preventDefault();

  };


  const handleClick = (nome) => {
    // Navegar para a rota desejada e passar as informações
    navigate('/pedido', { state:{ 'nome': nome }});
  };

  return (
    <div class="App">
     <form class='formNome' onSubmit={()=>handleClick(nome)}>
        <h2>Escreva abaixo seu nome, para iniciar seu pedido</h2>
          <input
            class='inputNome'
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        <button class='confirmaNome' type="submit">Confirmar nome</button>
      </form>
    </div>
  );
};

export default App;

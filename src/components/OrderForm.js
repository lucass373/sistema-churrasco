import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import '../styles/OrderForm.css';


const OrderForm = () => {
  const [nome, setNome] = useState('');
  const [pedido, setPedido] = useState('');
  const [qrcodeData, setQRCodeData] = useState(null);
  const [scannedData, setScannedData] = useState(null);

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

  return (
    <div class='divNome'>
      <form class='formNome' onSubmit={confirmaNome}>
        <h2>Escreva Abaixo seu nome</h2>
          <input
            class='inputNome'
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        <button class='confirmaNome' type="submit">Confirmar nome</button>
      </form>

      {qrcodeData && (
        <div>
          <h2>QRCode do Pedido</h2>
          <QRCode value={qrcodeData} />
          <p>Escaneie o QRCode para ver as informações do pedido.</p>
        </div>
      )}
      <hr />
    </div>
    
  );
};

export default OrderForm;

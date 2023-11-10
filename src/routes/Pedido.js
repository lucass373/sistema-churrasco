// Pedido.js
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import '../styles/Pedido.css'

const Pedido = () => {
  const location = useLocation();
  const pedidoData = location.state;

  if (!pedidoData) {
    // Redirecionar de volta se não houver dados no estado da localização
    return <Navigate to="/" />;
  }

  return (
    <div class="divPedido">
      <h1>Olá {pedidoData.nome}! Escolha seu pedido</h1>
      <div class="divLinha"/>
      <div><a>teste</a></div>
      {/* Outras informações do pedido aqui */}
    </div>
  );
};

export default Pedido;

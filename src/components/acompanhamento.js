// Acompanhamento.js
import React, { useState, useEffect } from 'react';
import '../styles/Pedido.css';

const Acompanhamento = ({ userName, onTotalChange, info}) => {
  const [cardapio, setCardapio] = useState({});
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCardapio = localStorage.getItem('cardapio');
    if (storedCardapio) {
      setCardapio(JSON.parse(storedCardapio));
    }

    const storedPedidos = localStorage.getItem('pedidos');
    if (storedPedidos) {
      setPedidos(JSON.parse(storedPedidos));
    }
  }, []);

  useEffect(() => {
    calcularTotal();
  }, [pedidos]);

  const calcularTotal = () => {
    const novoTotal = pedidos.reduce((acc, pedido) => {
      const precoItem = cardapio[pedido.id]?.preco || 0;
      return acc + precoItem * pedido.quantidade;
    }, 0);
    setTotal(novoTotal);

    if (onTotalChange) {
      onTotalChange(novoTotal);

    }
    
    if (info) {
      info(novoTotal);

    }
  };

  const updatePedidos = (id, novaQuantidade) => {
    const novoPedidos = [...pedidos];
    const index = novoPedidos.findIndex((pedido) => pedido.id === id);

    if (index !== -1) {
      novoPedidos[index].quantidade = novaQuantidade;
    } else {
      novoPedidos.push({ id, nome: userName, quantidade: novaQuantidade });
    }

    setPedidos(novoPedidos);
    localStorage.setItem('pedidos', JSON.stringify(novoPedidos));
    calcularTotal();
  };

  const handleAdd = (id) => {
    const novaQuantidade = (pedidos.find((pedido) => pedido.id === id)?.quantidade || 0) + 1;
    updatePedidos(id, novaQuantidade);
  };

  const handleRemove = (id) => {
    const novaQuantidade = Math.max((pedidos.find((pedido) => pedido.id === id)?.quantidade || 0) - 1, 0);
    updatePedidos(id, novaQuantidade);
  };

  return (
    <div className="divItems">
      {Object.values(cardapio).map((item) => {
        const quantidadeItem = pedidos.find((pedido) => pedido.id === item.id)?.quantidade || 0;
        if (item.tipo === 'acompanhamento') {
          return (
            <div className="item" key={item.id}>
              <img alt="espeto" src={item.img} />
              <div className="divText">
                <a>{item.nome}</a>
              </div>
              <div className="divPreco">
                <p>R$ {item.preco.toFixed(2)}</p>
              </div>
              <div className="contador">
                <div
                  style={{
                    display: 'flex',
                    width: '50%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {quantidadeItem > 0 ? (
                    <button
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                      className="sub"
                    >
                      -
                    </button>
                  ) : (
                    <button className="sub disable">-</button>
                  )}
                  <p>{quantidadeItem}</p>
                  <button
                    onClick={() => {
                      handleAdd(item.id);
                    }}
                    className="sum"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="total-info">
        <p>Total Pedido: R$ {total.toFixed(2)}</p>
      </div>
      <div className="user-info">
        <p>Usuário: {userName}</p>
      </div>
    </div>
  );
};

export default Acompanhamento;

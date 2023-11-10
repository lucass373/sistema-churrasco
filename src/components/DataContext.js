// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [pedidoData, setPedidoData] = useState({
    id: 123,
    nome: 'Exemplo',
    descricao: 'Pedido de exemplo',
  });

  const updatePedidoData = (newData) => {
    setPedidoData(newData);
  };

  return (
    <DataContext.Provider value={{ pedidoData, updatePedidoData }}>
      {children}
    </DataContext.Provider>
  );
};

export default useData;
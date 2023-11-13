// Confirma.js
import React, { useEffect, useState } from 'react';
import { RxExit } from 'react-icons/rx';
import '../styles/Confirma.css';


const Confirma = ({ onExit, total, onChange }) => {
    const cardapio = JSON.parse(localStorage.getItem('cardapio'));
    const pedido2 = JSON.parse(localStorage.getItem('pedidos'));
    const [pedido, setPedido] = useState(pedido2)

    useEffect(() => {
        const storedPedidos = localStorage.getItem('pedidos');
        if (storedPedidos) {
            setPedido(JSON.parse(storedPedidos));
        }
    }, []);




    const retNome = (id) => {
        const produto = cardapio[id];
        return produto ? produto : 'Produto não encontrado';
    };

    const updateQuant = (id, novaQuantidade) => {
        const novoPedidos = [...pedido];
        const index = novoPedidos.findIndex((pedido) => pedido.id === id);

        if (index !== -1) {
            novoPedidos[index].quantidade = novaQuantidade;

            // Atualiza o localStorage com o novo array de pedidos
            localStorage.setItem('pedidos', JSON.stringify(novoPedidos));
            setPedido(novoPedidos)
        }
        if (onChange) {
            onChange(novoPedidos)
        }
    };

    const somar = (id) => {
        const produtoExistente = pedido.find((pedido) => pedido.id === id);

        if (produtoExistente) {
            const novaQuantidade = produtoExistente.quantidade + 1;
            updateQuant(id, novaQuantidade);
        }
    };

    const subtrair = (id) => {
        const produtoExistente = pedido.find((pedido) => pedido.id === id);

        if (produtoExistente) {
            const novaQuantidade = produtoExistente.quantidade - 1;
            updateQuant(id, novaQuantidade);
        }
    };


    return (
        <div className="divConfirma">
            <div className='cabecalho'>
                <div className='divCabecaCont'>
                    <div className="divExit">
                        <h3>Finalizar Pedido</h3>
                    </div>
                    <RxExit size={"35px"} onClick={onExit} />
                </div>
            </div>
            <div>
                <h4>Itens Escolhidos:</h4>
                <div className='itemsConf'>
                    {pedido.map((item) => (
                        <div className='itemConf' key={item.id}>
                            <div className="divInfo">
                                <img src={retNome(item.id).img} />
                                <p>{retNome(item.id).tipo} {retNome(item.id).nome} - Quantidade: {item.quantidade} - Preço Unidade - R${retNome(item.id).preco.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p>total do pedido: R$ {total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Confirma;

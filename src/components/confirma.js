// Confirma.js
import React from 'react';
import { RxExit } from 'react-icons/rx';
import '../styles/Confirma.css';


const Confirma = ({ pedidoInf, onExit, total }) => {
    const cardapio = JSON.parse(localStorage.getItem('cardapio'));

    const retNome = (id) => {
        const produto = cardapio[id];
        return produto ? produto : 'Produto não encontrado';
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
                    {pedidoInf.map((item) => (
                        <div className='itemConf' key={item.id}>
                            <img src={retNome(item.id).img}/>
                            Item: {retNome(item.id).nome} - Quantidade: {item.quantidade}
                        </div>
                    ))}
                </div>
                <p>total do pedido: R$ {total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Confirma;

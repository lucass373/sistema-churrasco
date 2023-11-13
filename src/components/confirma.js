// Confirma.js
import React, { useEffect, useState } from 'react'
import { RxExit } from 'react-icons/rx'
import '../styles/Confirma.css'
import QRCode from 'qrcode.react'

const Confirma = ({ onExit, total, onChange }) => {
  const cardapio = JSON.parse(localStorage.getItem('cardapio'))
  const pedido2 = JSON.parse(localStorage.getItem('pedidos'))
  const [pedido, setPedido] = useState(pedido2)
  const [jPedido, setJpedido] = useState({})
  const [showQr, setShowQr] = useState(false)

  useEffect(() => {
    const storedPedidos = localStorage.getItem('pedidos')
    if (storedPedidos) {
      setPedido(JSON.parse(storedPedidos))
    }
  }, [])

  const organizaJson = () => {
    var arrPedido = []

    pedido.forEach((item) => {
      if (item.quantidade !== 0) {
        var idQuant = { id: item.id, quantidade: item.quantidade }
        arrPedido.push(idQuant)
      }
    })

    var arrOrg = {
      nome: pedido[0].nome,
      pedido: arrPedido,
    }
    setJpedido(arrOrg)
  }

  const retNome = (id) => {
    const produto = cardapio[id]
    return produto ? produto : 'Produto não encontrado'
  }

  const onClickQr = () => {
    organizaJson()
    setShowQr(true)
  }

  return (
    <div className="divConfirma">
      <div className="cabecalho">
        <div className="divCabecaCont">
          <div className="divExit">
            <h3>Finalizar Pedido</h3>
          </div>
          <RxExit size={'35px'} onClick={onExit} />
        </div>
      </div>
      <div className="divEscolha">
        <div style={{ textAlign: 'center' }}>
          <h4>Itens Escolhidos:</h4>
        </div>
        <div className="itemsConf">
          {pedido.map((item) => (
            <div key={item.id}>
              {item.quantidade === 0 ? (
                <></>
              ) : (
                <div className="itemConf">
                  <div className="divInfo">
                    <img alt= {retNome(item.id).nome} src={retNome(item.id).img} />
                    <p>
                      {retNome(item.id).tipo} {retNome(item.id).nome} -
                      Quantidade: {item.quantidade} - Preço Unidade - R$
                      {retNome(item.id).preco.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
          <p>Total do pedido: R$ {total.toFixed(2)}</p>
        </div>
        <div className="divQr">
          <button
            className="qrButton"
            onClick={() => onClickQr()}
            style={{ width: '80%', height: '40px' }}
          >
            Gerar QrCode
          </button>
        </div>
        {showQr === true ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <p>
              Peça para o vendedor escanear o QrCode para confirmar o pedido
            </p>
            <QRCode
              size={200}
              bgColor={'transparent'}
              style={{ margin: '10px' }}
              value={JSON.stringify(jPedido)}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Confirma

import React, { useState } from 'react'
import espetinhoCarne from '../images/espetinho-carne.jpg'
import espetinhoFrango from '../images/espetinho-frango.jpg'
import '../styles/Pedido.css'
import { NumberFormatBase } from 'react-number-format'
const Churrasco = () => {
  const [cont, setCont] = useState(0)

  function contador() {
    setCont(cont + 1)
  }
  function sub() {
    setCont(cont - 1)
  }

  const formatCurrency = (value, currency, localeString) => {
    const options = { style: "currency", currency }
    return value.toLocaleString(localeString, options)
  }

  const cardapioChurrasco = [
    {
      id: 1,
      nome: 'Carne',
      preco: 5.0,
      img: espetinhoCarne,
    },
    {
      id: 2,
      nome: 'Frango',
      preco: 5.0,
      img: espetinhoFrango,
    },
  ]

  return (
    <div class="divItems">
      <>
        {cardapioChurrasco.map((item) => {
            return(
          <div class="item">
            <img al="espeto" src={item.img} />
            <div class="divText">
              <a>{item.nome}</a>
            </div>
            <div class="divPreco">
            <p>{formatCurrency(item.preco,'BRL', 'pt-BR')}</p>
            </div>
            <div class="contador">
              <div
                style={{
                  display: 'flex',
                  width: '50%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {cont > 0 ? (
                  <button
                    onClick={() => {
                      sub()
                    }}
                    class="sub"
                  >
                    -
                  </button>
                ) : (
                  <button class="sub disable">-</button>
                )}
                <p>{cont}</p>
                <button
                  onClick={() => {
                    contador()
                  }}
                  class="sum"
                >
                  +
                </button>
              </div>
            </div>
          </div>
            )
        })}
      </>
    </div>
  )
}
export default Churrasco

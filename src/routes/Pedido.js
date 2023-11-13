// Pedido.js
import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import '../styles/Pedido.css';
import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { GiBarbecue, GiFrenchFries, GiSodaCan } from 'react-icons/gi';
import {BsCartCheckFill } from 'react-icons/bs';
import { BiSolidBowlRice } from 'react-icons/bi';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Churrasco from '../components/churrasco.js';
import Confirma from '../components/confirma.js';
import Acompanhamento from '../components/acompanhamento.js';

const Pedido = () => {
  const location = useLocation();
  const pedidoData = location.state;
  const [tipo, setTipo] = useState('churrs');
  const [totalPedido, setTotalPedido] = useState(0);
  const [confirma, setConfirma] = useState(false);
  const [pedido, setPedido]  = useState([])
  const [confPedido, setConfPedido]  = useState([])

  if (!pedidoData) {
    // Redirecionar de volta se não houver dados no estado da localização
    return <Navigate to="/sistema-churrasco" />;
  }

  return (
    <div className="divPedido">
      <SideNav
        id="sidenav"
        onSelect={(selected) => {
          setTipo(selected)
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="churrs">
            <NavIcon>
              <GiBarbecue size="25px" />
            </NavIcon>
            <NavText>Churrasco</NavText>
          </NavItem>
          <NavItem eventKey="Acmp">
            <NavIcon>
              <BiSolidBowlRice size="25px" />
            </NavIcon>
            <NavText>Acompanhamento</NavText>
          </NavItem>
          <NavItem eventKey="batata">
            <NavIcon>
              <GiFrenchFries size="25px" />
            </NavIcon>
            <NavText>Batata Frita</NavText>
          </NavItem>
          <NavItem eventKey="bebida">
            <NavIcon>
              <GiSodaCan size="25px" />
            </NavIcon>
            <NavText>Bebida</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>

      <div className="content1">
        <div className="divCabecalho">
          <h1>Olá {pedidoData.nome}! Escolha seu pedido</h1>
        </div>
        <div className="divLinha" />

        {tipo === 'churrs' ? (
          <Churrasco userName={pedidoData.nome}  onTotalChange={setTotalPedido} info={setPedido} confPedido={confPedido}/>
        ) : tipo === 'Acmp' ? (
          <Acompanhamento userName={pedidoData.nome}  onTotalChange={setTotalPedido} info={setPedido} confPedido={confPedido}/>
        ) : tipo === 'batata' ? (
          <p>batata</p>
        ) : tipo === 'bebida' ? (
          <p>bebida</p>
        ) : (
          <></>
        )}
      </div>
      <div onClick={()=>{setConfirma(true)}} className="total-info">
        <p>Total Pedido: R$ {totalPedido.toFixed(2)}</p><BsCartCheckFill size="25px" color='white' style={{marginRight: `20px`}}/>
      </div>
      { confirma == true ?
      <Confirma onChange={setConfPedido} onExit={()=>setConfirma(false)} total={totalPedido}/> : <></>
}
    </div>
  );
};

export default Pedido;
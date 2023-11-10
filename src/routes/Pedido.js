// Pedido.js
import React, { useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import '../styles/Pedido.css'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { GiBarbecue, GiFrenchFries, GiSodaCan } from "react-icons/gi";
import {BiSolidBowlRice} from "react-icons/bi";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Churrasco from '../components/churrasco'

const Pedido = () => {
  const location = useLocation()
  const pedidoData = location.state
  const [tipo,setTipo] = useState('churrs') 


  if (!pedidoData) {
    // Redirecionar de volta se não houver dados no estado da localização
    return <Navigate to="/" />
  }

 


  return (
    <div class="divPedido">
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



      <div class="content1">
        <div class="divCabecalho">
          <h1>Olá {pedidoData.nome}! Escolha seu pedido</h1>
        </div>
        <div class="divLinha" />
        {tipo=='churrs' ? <Churrasco /> : tipo =='Acmp' ? <p>Acompanhamento</p> : tipo == 'batata' ? <p>batata</p>: tipo == 'bebida' ? <p>bebida</p> : <></>}
        
      </div>
    </div>
  )
}

export default Pedido

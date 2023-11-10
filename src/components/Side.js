import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import { GiBarbecue, GiFrenchFries, GiSodaCan } from "react-icons/gi";
import {BiSolidBowlRice} from "react-icons/bi";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles/Pedido.css'

const Side = () => {
    return(
<SideNav id="sidenav"
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="churrs">
            <NavIcon>
                <GiBarbecue size='20px'/>
            </NavIcon>
            <NavText>
                Churrasco
            </NavText>
        </NavItem>
        <NavItem eventKey="Acmp">
            <NavIcon>
            <BiSolidBowlRice size='20px'/>
            
            </NavIcon>
            <NavText>
                Acompanhamento
            </NavText>
        </NavItem>
        <NavItem eventKey="batata">
            <NavIcon>
            <GiFrenchFries size='20px'/>
            </NavIcon>
            <NavText>
                Batata Frita
            </NavText>
        </NavItem>
        <NavItem eventKey="bebida">
            <NavIcon>
                <GiSodaCan size='20px'/>
            </NavIcon>
            <NavText>
                Bebida
            </NavText>
        </NavItem>
       
    </SideNav.Nav>
</SideNav>
    )
}
export default Side;
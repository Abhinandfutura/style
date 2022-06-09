import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FcMenu} from 'react-icons/fc'
function Navbar1() {
    const[isOpen,setisOpen]=useState(false)
  return (



    <Nav>
 <Logo to='/'>
     <h1>
Futura </h1><span>Labs</span>
 </Logo>
 <MenuIcon onClick={()=>setisOpen(!isOpen)}>
     <FcMenu/>

 </MenuIcon>
 <NavLinks isOpen={isOpen}>
     <MenuLinks to='/works'>OurWorks</MenuLinks>
     <MenuLinks to='/about'>About</MenuLinks>
     <MenuLinks to='/about'>Career</MenuLinks>
    
     <MenuLinks to='/about'>Contact</MenuLinks>
 </NavLinks>

    </Nav>
  )
}

const Nav=styled.div`
    
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background: white;
    
`

const Logo=styled(Link)`
padding: 1rem 0;

font-weight:800;
color:#7b7fda;
align-items: center;
    display: flex;

text-decoration: none;
span{
    font-size: 1.3rem;
    margin-top:4px;
    font-weight: 300;
}
h1{
    font-size:1.7rem;
   
}
`;

const MenuIcon=styled.div`
    display: none;
    cursor: pointer;
font-size: 25px;
color:#7b7fda;
    @media (max-width:768px) {
        display: flex;
    }


`;
const NavLinks=styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width:768px) {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 100%;
       max-height:${({isOpen})=>(isOpen ? "300px" :"0")};
       transition: max-height 0.5s linear  ;
        
    }
`;
const MenuLinks=styled(Link)`
    
text-decoration: none;
padding: 1rem 2rem;
color:#67bc98;
font-size: 0.9rem;
transition: 0.3s all ease-in-out;
&:hover{
    color:#7b7fda
}

`




export default Navbar1
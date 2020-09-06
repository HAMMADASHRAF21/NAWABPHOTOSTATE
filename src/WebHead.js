import React from 'react'
import {Link} from 'react-router-dom'
import './WebHead.scss';
import { Navbar ,Nav , NavDropdown } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function WebHead() {
    return (
        <div>
            <Navbar  sticky="top"  className="fixed-top"  collapseOnSelect expand="lg" style={{backgroundColor:'#0099FF',padding:'10px',fontSize:'25px',justifyContent:'center'}} variant="light">
  <Navbar.Brand style={{color:'white',fontFamily:'lato, sans-serif',fontWeight:'400',fontSize:'40px',lineHeight:'30px',padding:'10px'}} >
<span style={{fontSize:'70px',textShadow:' 0 0 10px gold',lineHeight:'30px',fontWeight:'400',color:'gold'}}>N</span>
  <span  style={{fontSize:'40px',lineHeight:'16px',textShadow:' 0 0 10px white',fontFamily:'Ubuntu, "Trebuchet MS", Trebuchet, Verdana, Helvetica, Arial, sans-serif',fontWeight:'400',color:'white'}} >AWAB</span>


  <span style={{paddingLeft:'8px',fontSize:'70px',lineHeight:'30px', textShadow:' 0 0 10px gold',fontWeight:'400',color:'gold'}} >P</span>
  <span style={{fontSize:'40px',lineHeight:'16px',textShadow:' 0 0 10px white',fontFamily:'Ubuntu, "Trebuchet MS", Trebuchet, Verdana, Helvetica, Arial, sans-serif',fontWeight:'400',color:'white'}} >HOTO</span>

  <span style={{paddingLeft:'8px',fontSize:'70px',lineHeight:'30px', textShadow:' 0 0 10px gold',fontWeight:'400',color:'gold'}}>S</span>
  <span style={{fontSize:'40px',lineHeight:'16px',textShadow:' 0 0 10px white',fontFamily:'Ubuntu, "Trebuchet MS", Trebuchet, Verdana, Helvetica, Arial, sans-serif',fontWeight:'400',color:'white'}} >TUDIO™</span>

  
  </Navbar.Brand>
 

 
 

</Navbar>
        </div>
    )
}

export default WebHead

import React from 'react'
import {Link} from 'react-router-dom'
import './WebHead.scss';
import { Navbar ,Nav , NavDropdown } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function WebHead() {
    return (
        <div>

            <Navbar  sticky="top"  className="fixed-top"  collapseOnSelect expand="lg" style={{backgroundColor:'#0099FF',padding:'10px',fontSize:'25px',justifyContent:'center'}} variant="light">
<span style={{fontSize:'50px',textShadow:' 0 0 10px gold',lineHeight:'30px',fontWeight:'40',color:'gold'}}>N</span>
  <span  style={{fontSize:'25px',lineHeight:'10px',textShadow:' 0 0 10px white',fontFamily:'Ubuntu, "Trebuchet MS", Trebuchet, Verdana, Helvetica, Arial, sans-serif',fontWeight:'200',color:'white'}} >AWAB</span>
  <span style={{paddingLeft:'8px',fontSize:'50px',lineHeight:'30px', textShadow:' 0 0 10px gold',fontWeight:'40',color:'gold'}} >P</span>
  <span style={{fontSize:'25px',lineHeight:'10px',textShadow:' 0 0 10px white',fontFamily:'Ubuntu, "Trebuchet MS", Trebuchet, Verdana, Helvetica, Arial, sans-serif',fontWeight:'200',color:'white'}} >HOTO</span>

  <span style={{paddingLeft:'8px',fontSize:'50px',lineHeight:'30px', textShadow:' 0 0 10px gold',fontWeight:'40',color:'gold'}}>S</span>
  <span style={{fontSize:'25px',lineHeight:'10px',textShadow:' 0 0 10px white',fontFamily:'Ubuntu, "Trebuchet MS", Trebuchet, Verdana, Helvetica, Arial, sans-serif',fontWeight:'200',color:'white'}} >TUDIO™</span>

  
 
 

 
 

</Navbar>
        </div>
    )
}

export default WebHead

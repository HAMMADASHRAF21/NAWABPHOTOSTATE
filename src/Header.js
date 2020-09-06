import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom'
import { Navbar ,Nav , NavDropdown } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';


function Header() {
  const [{basket}] = useStateValue();
    return (
        <div >

<Navbar  sticky="top"  className="fixed-top"  collapseOnSelect expand="lg" style={{backgroundColor:'#0099FF',fontSize:'25px'}} variant="light">
  <Navbar.Brand ><Link className="LINK" style={{textDecoration:'none',color:'white'}} to="/">  NAWAB</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" style={{color:'black'}}>
      <Nav.Link    > <Link className="LINK" style={{textDecoration:'none',color:'white'}} to="/">  HOME</Link></Nav.Link>
      <Nav.Link ><Link className="LINK" style={{textDecoration:'none',color:'white'}} to="/item">ITEM </Link></Nav.Link>
      <Nav.Link ><Link className="LINK" style={{textDecoration:'none',color:'white'}} to="/search">SEARCH </Link></Nav.Link>
      <Nav.Link ><Link className="LINK" style={{textDecoration:'none',color:'white'}} to="/contact"> ABOUT</Link></Nav.Link>
    </Nav>
 <ShoppingCartIcon fontSize="large" />
    <span>{basket?.length}</span>
  </Navbar.Collapse>
</Navbar>

        </div>
      
    )
}

export default Header

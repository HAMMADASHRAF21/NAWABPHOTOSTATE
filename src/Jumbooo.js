import React from 'react'
import {Jumbotron,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { Navbar ,Nav , NavDropdown } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Container , Row, Col} from 'react-bootstrap';
import {Carousel} from '3d-react-carousal';
import Grid from '@material-ui/core/Grid';
import Sero from '../src/sero.jpeg'
import mero from '../src/mero.jpeg'
import tero from '../src/tero.jpeg'
import hero from '../src/hero.jpeg'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {  deepPurple ,blue,indigo,red} from '@material-ui/core/colors';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    
  },
  deepblue: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    
  },
  green: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

}));

function Jumbooo() {
  const classes = useStyles();
    return (
        <div>


<Container  style={{paddingBottom:'20px'}}>

<Row style={{paddingTop:'20px'}}> 
    <Col sm={1} lg={2}>
   
    </Col>
    <Col  sm={10} lg={8} >
     <hr/>
     <br/>
     <br/>
     <hr/>
    </Col>
    <Col sm={1} lg={2}>
 
    </Col>
  </Row>
       <Row style={{paddingTop:'20px'}}> 
    <Col sm={1} lg={3}>
   
    </Col>
    <Col style={{display:'flex',justifyContent:'center'}} sm={10} lg={6} >
        
<div style={{padding:'5px'}}>  <Avatar className={classes.blue} style={{padding:'5px'}}> <a onClick={()=> alert("SORRY WE ARE NOT ON TWiTTER YET 🥺")} style={{textDecoration:'none',color:'white'}}> <TwitterIcon fontSize="large" color="light" /></a></Avatar> </div>
     
<div style={{padding:'5px'}}>  <Avatar className={classes.deepblue} style={{padding:'5px'}}><a href="https://web.facebook.com/mujtaba.ashraf.35" style={{textDecoration:'none',color:'white'}} >  <FacebookIcon fontSize="large" color="light" /> </a></Avatar> </div>
<div style={{padding:'5px'}}>  <Avatar className={classes.red} style={{padding:'5px'}}>  <a   onClick={()=> alert("SORRY WE ARE NOT ON YOUTUBE YET 🥺")} style={{textDecoration:'none',color:'white'}}><YouTubeIcon fontSize="large" color="light" /> </a></Avatar> </div>
<div style={{padding:'5px'}}>  <Avatar className={classes.green} style={{padding:'5px'}}><a  onClick={()=> alert("SORRY WE ARE NOT ON INSTA YET 🥺")} style={{textDecoration:'none',color:'white'}}>  <InstagramIcon fontSize="large" color="light" /> </a></Avatar> </div>
    
     
    </Col>
    <Col sm={1} lg={3}>
 
    </Col>
  </Row>
       </Container>


                   <Jumbotron style={{backgroundColor:'#277DDE',paddingBottom:'5px',justifyContent:'center',textAlign:'center',borderRadius:'inherit'}} className="mb-0" >
 
 <h1><Navbar.Brand style={{color:'#FFFFFF'}} >  NAWAB PHOTOSTUDIO  ™</Navbar.Brand></h1>
 
 <p>
 <Navbar.Brand style={{color:'#FFFFFF'}} > KALAR KAHAR ROAD,DHADAKOT</Navbar.Brand>
 </p>

 <Navbar.Brand  style={{color:'#FFFFFF',display:'flex',justifyContent:'center' }} >  
 <Avatar alt="Cindy Baker" src={Sero} />
 <Avatar alt="Cindy Baker" src={tero} />
 <Avatar alt="Cindy Baker" src={hero} />
 <Avatar alt="Cindy Baker" src={mero} />
 
 </Navbar.Brand>
  
 <p style={{color:'white'}}>Design by  HAMMAD ASHRAF </p>

</Jumbotron>
        </div>
    )
}

export default Jumbooo

import React from 'react'
import './Itemadd.scss'
 import {Card ,Typography,CardContent } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import {Button} from 'react-bootstrap';


function Itemadd({price,image,disc,name,id}) {
const [{basket},dispatch] = useStateValue();

const addtobasket = () => 
{
dispatch({
type: 'ADD_TO_BASKET',
item:{
    id:id,
    name:name,
    image:image,
    price:price,
    disc:disc

},

});


}


    return (
<div className="itemadd" style={{paddingTop:'5px'}} >
 

<Card key={id} style={{border:'1px solid black'}}  >
        
  <CardContent  >
                   <img  style={{height:'250px',paddingTop:'5px',width:'250px'}} className="MuiCardMedia-img" src={image}   alt="ad"/>

                               
                      <Typography variant="h5" color="textPrimary" component="h2"> {name} </Typography>
            
            <Typography   variant="h5" color="textPrimary" component="h2">Price :  {price} </Typography>
           <p style={{fontWeight:'bold'}}> {disc} </p>

            <Button  variant="outline-dark" style={{background:'#E0E2DF'}} onClick={addtobasket}>ADD TO CART</Button>

              </CardContent>
          
         </Card >  

      
        </div>
    )
}

export default Itemadd

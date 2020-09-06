import React from 'react';
import './Home.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Container , Row, Col} from 'react-bootstrap';
import {Carousel} from '3d-react-carousal';
import Kero from '../src/kero.jpg'
import lero from '../src/lero.jpg'


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Jumbooo from './Jumbooo';


function Home() {
  
    return (
      <div>
          <div id="kilo">
              
          <img   style={{width:'100%',height:'80vh', paddingBottom:'20px'  }} src={Kero}  />
          <div class="centered"  style={{textShadow:' 0 0 10px white',fontSize:'55px'}}>
          NAWAB PhotoState
          <hr/>
       <p style={{fontWeight:'normal',fontSize:'30px',textShadow: '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)'}}> Contact : 03484045057 </p> 
          
          <p style={{fontWeight:'normal',fontSize:'30px',textShadow: '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)'}}>Kallar Kahar Road ,Dhadakot </p> 
          
          </div>
          </div>
        
          <Container fluid style={{backgroundColor:'#FFFFFF'}}>
              
  <Row style={{paddingTop:'40px'}}> 
    <Col sm={1} lg={2}>
   
    </Col>
    <Col  sm={10} lg={8} >
        
    <img className="img-fluid" src="https://assets.ontrack.com/cms/images/ontrack/in-page-assets/img_1000x200_homedevices.jpg?sfvrsn=cd83ee4c_8" />
    </Col>
    <Col sm={1} lg={2}>
 
    </Col>
  </Row>
  <Row style={{paddingTop:'20px'}}> 
    <Col sm={1} lg={3}>
   
    </Col>
    <Col  sm={10} lg={6} >
    <h1 style={{textShadow:' 0 0 10px goldenrod'}}> ALL FOLLOWING ITEMS ARE AVAILABLE </h1>  
    </Col>
    <Col sm={1} lg={3}>
 
    </Col>
  </Row>
  
  <Row style={{paddingTop:'20px'}}> 
    <Col sm={1} lg={2}>
   
    </Col>
    <Col  sm={10} lg={8} >
     
    <h4 style={{textShadow:' 0 0 10px yellow',fontWeight:'100',fontStyle:'normal',fontFamily:'pragmatica, sans-serif',lineHeight:'36px',color:'#21364B!important',fontSize:'26px'}}>Frames,Printing,Scanning,Panaflex,Web site,Wedding Cards,Visiting Cards,PhotoState,Mug Printing,Cap Printing,Shirt Printing,Wedding Videos,Festival Videos,Online Video Conference,Indian Album and much more...</h4>  
    </Col>
    <Col sm={1} lg={2}>
 
    </Col>
  </Row>

 
 

</Container>

<Container fluid style={{paddingTop:'25px'}} >
  <Row>
    <Col lg={3} style={{paddingTop:'10px'}} className="colborder" >
    <Card className="card">
        <CardImg top width="100%" src={lero} alt="Card image cap" />
        <CardBody>
          <h2 style={{color:'#0099FF',textShadow:' 0 0 10px skyblue',borderBottom:'2px solid goldenrod'}}>CUP PRINTING</h2>
         
  
        
        </CardBody>
      </Card>
    </Col>
    <Col lg={3} style={{paddingTop:'10px'}} className='colborder'>
    <Card className="card">
        <CardImg top width="100%" src="data:image/jpeg;base64,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" alt="Card image cap" />
        <CardBody>
        <h2 style={{color:'#0099FF',textShadow:' 0 0 10px skyblue',borderBottom:'2px solid goldenrod'}}>SHIRT PRINTING</h2>
        
        </CardBody>
      </Card>
    </Col>
    <Col lg={3}  style={{paddingTop:'10px'}} className="colborder">
    <Card className="card">
        <CardImg top width="100%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTDw8NEw0VDQ8ODw0NDQ0WDQ8NDQ0PFREWFhURGBgZHSgsGBolGxgYITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0dICUrLS0tKy0tLS0tLS0rLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANIA8AMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAYHBQj/xABNEAACAgADAwYJCAYIBAcAAAABAgADBBESBSExBgcTIkFRFDJCUmFxgZGhIzNicoKSscEkU7LC0fAVNENzg6LS4RZj8fJEVWR0k7Pi/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQGBQf/xAA1EQACAQMCBAMGBgEFAQAAAAAAAQIDBBEhMQUSQVETMmEGInGBkaEUQrHB0eEjFVLC8PEz/9oADAMBAAIRAxEAPwDuMAIAQAgBACAEAIAQAgBACAEAIAQAgFN1qopdmCKN7MxCqPWTIZKTk8I85eUmEJyGOoz7vCKv4yviR7mw7O4Sy4S+h6dbgjMEEHgQcwfbLms01oyyAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgGLjcbXUuqy1al85mC/jIckty9OlOo+WCbfoazjucDCJuRnxB+gmS/efIe6YZXEEepR4JdVNWlH4v9jxsTznnyMCPRqxG/3BfzmP8V2Rvw9ndPfqfRf2ebbzm4o+LRQvrFj/AB1CVdzLsZl7P0VvJ/Y8nb3LXEYqg4axKkRmRtSI4bqnMDexErKs5LBsW3CadvU8SDefkaqwfsf3zHobrVXpI3Dm45SjC22piLWSh0Xoq1U2oLM97ZDeu7uG/PfwEz0qijuzxuJWNW4w4RWevc6rgeUOFt3V4utz5usK/wB1sjNmM4y2Zz9Szr0vPBr5Hqgy5rjgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgHl7Y21Rhl13WhM/ETxnf6q8T+ErKaitTPb2tW4ly01n9Dnu2+cG6zNKB4MnnnJ7m9+5fj65qTuW/KdPacBpQ96s8vt0NOxOIextdjta7eUzF295mvJt7s9ynShTXLBYXoVl5UuVkE785JXBEgyBgCJJGCOmCMESknJVxFkYGqPT2ftq+r5rFWVfRDnR907vhJU5R2MNS0t6vngn8jZtnc4mLTIWJXih6R0Vv3l3f5ZmjcyW551bgFCWtNtfdG07L5w8LZkLFfCt9Ia6/vL+YEzwuIM8evwO5p6x99en8G2YXEpYgsrsW1G4OrB1PtEzJp7HkShKDxJYZkSSAgBACAEAIAQAgBACAEAIAQAgBANN5X8skw+qirK3EeV210Z+d3t9H3+nBVrKGi3PY4bwmdy+eekfu/h/Jy7GYp7bDdZYbbG8Z24+r0D0DdNGUnLVnY0aMKMeSmsIxWeRgu2iBuyk4KSmkKuwGGiIzLMpUyJ5CCQygCCwMC0wMD0wMFZSTko4llZkMsmWkCQWMnZ2Ouos6Sm1qn8rT4rfWXg3tlozlHZmvXtaVeOKkc/97nQOTvOEj5V4oCl/1659C31hxT4j0iblO5T0kcxe8DqU/eo+8u3X+zfEsBAYEEHeCN4I9Bm0eA1h4ZZACAEAIAQAgBACAEAIAQAgGjcueV3Q54Wg53kfK2D+wB7B9M/Ca9atyrCPc4Twrx34lXy/r/Ry57Cd/E+MWPWZieJz75onYpKKwipjJSKtlbSTGypzJRikyAaTgqpFyWyrRkUy5XlcGVSLM5BZMcF8iykDIQBgQCJrk5K4JqZBJIwBZQTk9vk7yovwhyU9LT4zUMer9k+Qfh6JmpVpQPMveF0rpZ2l3/k6tsLbdWKr6St94+cqPVsqbuI/PgZvwqKayjjbq0q20+Sovn0Z68uawQAgBACAEAIAQAgBANS5ccp/Ba+ir/rNqnR5QqTgbD+Q7T6jMNWpyL1PW4Xw53U+aXkW/r6HI3JJJYkknUWLaixPEkniZoZzqdtFKKwtuhEwCtoKMqaSUZWRLGNohpgo4oAsNjlJrulS6LlaRgyJliuJDRfmJhpBbJLOQWCCRwQRJy+z+zAJLJA5ADKAZOzdoW0WpdU+h1+6w7UYdo9EvCTg8owXFvTuKbhUWn6fA7HyZ28mLp6Req69W6rPfW/5g9hno06imsnC3tnO1qcktuj7ntzIaYQAgBACAEAIAQDA2vtBKKLMQ/i1Lqy7WPAKPSTkPbIlLlWWZaFGVaoqcN2cP2ljnuusvsOp7TqbzVHYg9AGQnmSk5PLPoVtQjQpqnDoYpkGZkDBVlbGSUbK2gqyoyTGKSQMSCUSWQSTEgsiQgkkJBJINBZMsDSCyZOQWE0Aip/yt8DwkkJk4JBjlvgCVgRugJ51R6ewNsvhb0vXePFtTz6u0evtHpl6U3CWTTvrON1ScHv0fqdsweJW2tLUOpHUOjd4M9NNNZRwE4SpycJboyZJUIAQAgBACAEA5nzn7W1WV4JT1U023fSc+IPYMz9od01Lmf5TqOAWuE67+C/c8fDcluk2e+0RiNOhMRY9Bp1aujLbg2oZZgdx4zHGjmHMbtTijp3f4Zw6pJ57+mDH2hyUuqwyY13rWtkqbRqYWqXy0rp05E7++Q6TUeYvR4rRq1vBSeddemhWvI7HNX0gwjZeMql61fL6hOfsjwZ9iZcWtFLl5/s/1PBspcMUKMHUtmhB1LlxzHZKYext+JFrmTWDGYyA9REySrIySMjkEkhIBIQXRIGQSSEEolnIJHBJNWkFkycgsQz3j6XV/MfnJK9SwQWDKAV116Tu4QVUUicgub5zY7bIY7Pc7m1WYfPyW4tX7RmfYe+bltU/KzmOO2Wn4iPwf7M6ZNw5gIAQAgBACAU32BVZ2OQQFmPoAzMN4EU5NJHCNpYw33WXtxtdn+qDwHsGQ9k8ubzLJ9FtqKo0o010R0Dm9UXbNxOFbxTZbU31LK1z/FpuW+sMHMcbzSu41F2T+hZt3GC7auB2eMjXh38IuHZ0grZlHsA/zxJ5qKK6GK1pOlY1bh7y0Xwzr9f2PcxOLf8ApHD4dWyr8GxV9y7usddapn6iWmVt86RoQpR/Cym9+ZJfRtnl0YZTt+20DxNnJr/vHsyBPp0rlKY/yZ9DalUa4co53m/si7DYKu/aW0DZUlqV04HDqrorrnlZY24/XWSknJmGVSdO3pqLabcn+iPC2ByZwmJxO1NeHXoqsUMPTWhekV6EAfToIyzMrGEW3k3Li9r0qVHllq45frr6lG1uQuEsw12Iwlrq1PTdUuXqZ6iQ6HUMxvUjPP3yJUYtZiZKPFLiNRQrJa4+OuxpnJbYTY2/wdbBV8k9vSFC69UqMsgRx1TXhDneD2b26VtT52s64NhxHNli18S2m37bo3xX85kdvI0YccoPzJr7niLyTxhDMuEa1Fe2pmR6266OUYZaszvBHCY3Skbq4lbLClLGieqfUwr9mX1nJ8PahUBmVqXXce3eOG475RwknsbELmlPyyT+ZigyrNhEgZBKJCCyJiQSMGCyFYct/wBJfxy/AmEVky4QWCAEATCCSeFxDVOlyHJ6nV09YOeXwkp4aZjrU41YOEtnod42bjVtprvXxLUSxftDPKerF5WT5zVpulNwe6eDMklAgBACAEA1rnAxnR7Pty426aB9o9b/AChpirPEGejwmj4l1FdtfocfnnHdnSuaurLD4iw8GuC/dQf6pu23lOS9oJZrxj2X6s8TkBb0217r2OZNWJtX7VigfBpSg81Gzd4vDwrCEF3X6M3TBjVtXFv2U4TCUD1s9ljfuzYj52c/UaVpCK3cm/skjG5OHXtLa1/YtmFwi/4debfFpENZSZluvdtqMPRv6syOSozbaF+fzuPvyP0KkSr8UaTBbv1MV3tTh2ivvl/uYXN0w8CuxR/8RisbiifQbCP3TIpeXJl4lnxow7RivsY+3MUlGx2fC1tbTiEdltLZFFxJJNrBt53vwy3ZjhEniGUWtqbq3ajVeGv+PT7HJdmqxuprV2Q221VBlco3XcLuI39s047nU1+Xw5NrOEzsHOVtazD4So02mmyy9EDjSx0BGY8QR2CbdeTjHQ5bhNvCvWamsrBkbDttr2Qt6obcQ2HtxQXRm1t1mq3xV45s3AS0cqGTFcRhK7cc4jnHwS0PK5EbbvxGPxPT19DYmGprNWh006bGOZVt4J1+7KY6U3KTybfELWnRt4eG8pyevy/o9DbGCqwuF2hi7Kq7WtssvUOiONbBUqTeO8D3mXklFNs1repUuKtKnFtYwtO27MLk3snZuMw40YYMaRXVc5RqHazQM2zUjM9ufplYRpzWxsXda9tauJS31WudDVeWmzsDSEXC2a7OktS5Om6XotG4gg7wdW72Ga9aMI+U9jhde7qt+OtMZWmM5NWBmA9lMmJBYjYdx/nsklZPQvU/uyC62HAHAAwCJEgk6rzX4vXgeiz/AKvdZWv1GysX9sj2T0beWYHE8cpcl1zLqk/2Nymc8gIAQAgBAOf862I6uFp857bT9kBR+2ZrXL0SOh9noZnOfZHOppnVmVg9q3UgpViHqQ55qrnRv49XhLRnKOzNeraUKsuacU2UbOx9lFqX1PodPF8pWXgQR2giIycXlE3FvCvTcKi0Npu5y8Qa9Iw9S2EfO6nKr6Qh/iZn/EPB4i4BSUsubx2x+/8ARgcjuV/gj29MjW14h+ldxl0q2dr5HLUDnv8AVIpVeV6mTiXDPHjHw9HFYx0we9tDl3g6sNZThFdrLemZc0etK3tLM9hL7zvYnIZ+wTK60UvdPNpcJuJ1FKtoljrnbpoS2Zt3DVbCNCYmvwhMDd8hrHS9M6MctPEnU0KaVPHXBFe2qzvudxfK5LXGmDI5a2pXsNKEdW6uCo6rBvF0k8PQhlqjShgpw6Lnfc0vVmg8isPr2lg0/wCcr/8AxobPxWa1JZmj3eIz5bWb9Db+eO/+qUjj+kW/sKv4mZrl7I8rgUcc8/h/JtO38XZhNnBqa+ksqXD1InRu65dVWJVd+WWcyybjHQ8y2pwuLjE3hPLPH5uEsuux21LUCWXOlGkKVC6EGrIHf5o+zKUcvMmbnFXGnGnbweUtfqXc6J17OrsRup09Fm7g6MjAfFlPsEXHkI4JpdYfZkuaykJs82frcRdZ7FAT9wxb6U8kcalzXXL2SX7nJ7bukZ7P1rva31mJb85pSeWzrqcOSCj2WPoLKVL4CsyCYsGPEHyv4SQ2XVnh6lkF1sTgkJBA5IEYBv3NLbvxdf8Acv8Atj+E27V7o5j2ih71OXxR0ibhzQQAgBACAcw51LM8RQnm0lvvOf8ATNO53R1fs9H/ABzfqaSZrHQkGkElbSSrKnkoozcORPI+rG4e26yyyord0SFGTLIIpJIZT2t8JsUqUZxyzwuJcSqW1VQgk1jLyRwHIHpsO+KXF6EFuKVVajVqSqxkD5hhx058JKo5WUUqcXdOooSjnRderWTztl8h8ViMPXi6uiZLQzBGtZLdzFfNy7O+VVGTWTYrcUo0arpzTyvQwb+SuKS44XwYtcK+nKIyP8mTpD7j37u+VdOWcGWN/bygp82FnGpjqmJwtgs0XYSxeqrtU9XEZbiwyO6RiUXkyuVC4jy5U12yG0Ns3X2JZdf0z1ZBNSoukA55ZKBnvkSqNvLFK1pUouMFhM2/C86OJHzmGpt+q1lH4lpmVzLqjzJ8CpPyya+/8E6ucJRhr6lwzJbb4S62ixXRbbSzZnPI5At7lEfiEo4wV/0WTqxk5JpY+iFtblPh7tkrggXW9K8Iuk1HJnrKasmG7gpkTqxdPHUtbcPrUbzxMZjr16NM9bYm3MNVsboVxNfTrhsQ3Rawr9I+tsgDxObdkvGcVTxnoatzaVql9zOL5XJa46HMsppHVklglEc98EdQs7fq/lAfUuq4D6okMvHZE85BYYkgcggUA3Xmqb9JvHfhx8LB/GbVruznvaJf44P1Z1GbxygQAgBAEYByXnJszx5HmU0j9pvzmjcP3jsuAxxbZ7tmqzAe0VvCBW0EMqYyTGzsnNrTo2ZWx3dI+ItJ9GsqD7lE36K9w4vi8+a7l6YRdtWlcJsjEJW5K1Ya7Q5yZmZgd5I3by0tLEYPBgouVe6jzbtoWAwt1exqqqP6yMFUtXiDTc1YOfW3biSd8hJ8mF2FWdOd25T8vM8/DJ5HN8cRZi8fdijniKkwuFb5vq5a3I6m7tXh3ylLmy3L0NviXgxpU40fK8v9upsmAua/w6u6odCmIeisMjKLaRWmonPxhqLbxu3TKsvOTz5RVPkcHrjPweWa5zf7Oo/opbbaUuRnxFub1I7aFcqPGHckx04rk1RvcRrVPxWIt5wlvjXGppHLDHYO2yp8HUKUCP0yik0ZuSNOY4bgDw75rVXBv3T3eH07impeO87Y1yeCJiPSQxILIlBYlIJBYI6jYZwS1khaNxPo/KEVlszIWQzKtiUgkcAIAQQbnzWj9Mt/9sf/ALFm1a+ZnP8AtB/8YfE6nN45MIAQAgBAOK8tL9e0MUfNdU+4iqfiDPPrPM2d3wmHJaQ9dfqeIZiPRK2EElTGCjKWMnBibOu3kV8niikMxwCVbiPnLUC9nbqeb21PC7HG+e/zJac2fkv/AAs5wE07J8FXcbThMIntdR+CyanlwRw7W65+3M/omZ/K8YlMGBg1bplepV0aNS1jjubceAHtlp5x7phs/BlWzX21PO5s67Ogxd92fTXYy025qFOpEVTmBw3hpSjnlyzPxRw8SMKflUVj56jxOMfEbFvxVlhpdq8a6tWxTqJZYKwd+8FQufrMlvNPLKQpxpXkYRWdVv8AIydj214bYtD3LnUmEra5QurV0gBIy7cy0mOIw1K1lKveSVPdy0OTcpL6HxLvhqxVh8k0Jo0bwg1dXs35zSqOLl7p1VnGrGklWeZHnLKG4icgshwWJSCSLQQRV5OCMkrO37K+/ISCZGQsgyEoJGJACAEkg3bmqH6Vef8A0/42D+E2rXdnPe0L/wAcPizqE3TlAgBACAVW2BQXO4KCx9Q3mCUsvBwTE3myx7jxtd7W9bEt+c8uTy2z6PRh4dOMOywVGQZCt4BS8kqylpJiaEu7h1ZOWVcV2Ml9q3kIGxNrhHS1Fe57RXYu9XAYkZiTzy7murakm2opZWO36Ht4bnC2gnHELd/eU1/uBTMirzNKpwi1f5Wvg/8A0u2RzgXU0vR4Oj63xFrPrdH12uzse3Pe3wlo1mlgx1uFU6k1Lmaxj6IlZy0Q7J/otcO6P4MmHW3WjI2WWokcRnv7+MeKuTlKLhsldePzJrOcdTav+Mdl3YcYS1nWrQiMjVWhckyI61eeW8DtmXxINYZ5v+nXlOp4kFr6NHNdtikYm0Yf+rq+mnrO3UAGZzbecznxmpPHM8HS2rqOlF1fN1MQShtImJBdEhILDgDIgnBS6yUY5IsI4fW/3kFuxev+qVMpKSByAEAckg3vmoT5XFHuqpX3lj+U2rXdnN+0T92mvidKm6cuEAIAQDXuXOM6LZ+II4uq0D/EIU/AmY6ssQZv8LpeLdQT75+mpxl3AGZM8471vG5jvjlH0vojrNJwYnWittShsTYeFIX6zfwlsRRj8Wo/LEqZbj2ov2S0ZiUarvqiPQX/AKxfuf7ycw7FfCuP9yINViPoN9orGYFHC5XVMgXvHGjV9Vg0lKL6lOe4jvArOPI8atk9amTyLoVd0154tE0xiNwMjkZKuISLQ4MjBkUkyYMgumMGCcliNKsyRZcsgyIkJBYeUEkspBYrtSSjHJABvT635GB1RkLIMo4A5AAQAzkjB0fmor+SxVnnWVJ91Sf3pu2q0bOS9oZf5YR9P3N/m0c+EAIAQDyuUWEptwt1dzaKdBZ3B0tXp3hge8ZSs0mtTPa1alOrGVPfocCswydIdLu6Zto15K2jszA3Z5TzpS6I72nRlyp1Hr1GqgcJUzJJbEoAwJAQ4JCAOMDAiIWhDWSm3B1txrDfZ/OWU2upilb0pbxMZ9lL5Lsn2tS/GWVVmu7GP5XgpbB3LwKuPutLc0WY3b1o7PIumdfHpZfV1l+EcqexHiTj5okq8Yh7ff1ZVxZeNxBmbU4PbK4NmMky4SplRKCwCQSgMDAh5H89hgjGxaILBnAHnAIs0DBWoOcDLOtc1tWWBZv1mItb3BV/Izftl7hxnHp5usdkjc5sHihACAEA5Vzj8pOks8Bqf5Ko/LsP7SweRn3L+PqmnXqZ91HV8E4fyL8RNavb0Xc0Wax0IQQxiQEMQAzgDygBAFAHACAEgBJIIWYdG8ZA32ZPM0UlShLdGK2zE8ksnqY/hwlvEfUwO0jvHQOgtXxbAw9K/mIzFjw60fK8/EkuKceNSfpMvWX+McqLKtNeaI0xyHt0nzT1WleRl1cw6lovHfIaLKqnsywNnl9b+MF+ZPBZILoRgkIACAevsbYF+JI0V6U/WtmtXsPleyZIUpSZ593xGhbr3nl9ludf5P7MXD4evDKcwgObec7Esxy7N5M9GEeWODiLq4lcVpVJdT1JYwBACAahy95R+DU9DWf0i4dXLxqk4Gz19g9PqmGtU5V6nrcJsPxNTmkvdX39DkBM0Dt9ERzgqMQB/wDb4sEB/wBsgD/CARy/kSQx58fKkEZGDBOQgBAHAFAHACCRyCRESSMIqtoBGRAb/NJ5ikqcZboxHwC+Tmh9DFZZTZryto9NBLS4O59WnvX+EcyZCpVIvRmfga7rLErVAzudK9Yr6yd3ADfIUVJ4RercSo03OeyNwTkbnxxHuq//AFNlWvdnhy9on+WH3M/DcjKvKNj/AGgq/ASytodTVqcfuJeVJHt7P5NUpkRQua+UV1t72zmWNKC2R59a/uKvmmzY8JhspkNM9ACAOAEA87bG00w1Fl7ncg3Dtdj4qj0kyspKKyzNb0JV6ipw3f8A3JxDa+0XuusvsObu32VA4IPQBPNlJyeWfQLa3jb0lTj0MAmQZmGUEYHlAGVgMP53wQI/uwQL+dQkEB/P0oJD+fpSSA/nfBIyfRIA4JHAGBDJFAHIJCAKAIiAQCwMG+8hdhEL4S469o+Sz8mrv9v4Zd83renhczOS43feJPwYPRb/AB/o32rBDumyeAZCYYd0AvSiAXAQBwAgCJgHG+XPKHwm/o0P6PSSqebY/A2fkPR65oV6nM8LY7XhFgrenzz8z+y7fyanbco4kTClk9VzijKwmz77fmsHfaPOXD2Mn3ssvjLqnJ9DUnxChDzSX1Mz/hrH/wDltvuH4Zy3gzMH+rW3+5ff+DFxOz8RV85gb0HnHD2afvZZSvhSXQzU+IUJ7SX1MSvEKeBEo00baqRZZIJyLKAyK9m6CBDs8r1QQGX2v2pIGDBI++QB5QSMwMjgkWcgDjAFJJFnIAQSbDyO5PnE262HyFR6/wDzH4isfifRl3zPQpc7y9jyOLX6tqfLHzP7ep1vC4YDgJ6BxTberM4IIIJwAgBACAEA5/zlcqRTWcFW3yjj5ZgfErPk595/D1zXrTx7qPb4TZKT8er5Vt6v+jUeRPJVsfniLLDVhEfQunx73HEKTuAHAtv35jsmOlQzqzf4hxjw/chv+h1LZewMJhvmsMiP55Gu1vttmfjNpQS2Ocq3NarrOWT0HxUsYClsTAKzifTAPL2psnDYj57CpafP06bfY65H4yrjF7melc1aXkk0adtXkBlm+FxH+Bb1l9jgfiPbMErddD2bbjklpUXzRqGMotpbo76WpfydXiN9VhuYeoma0qconv0L2lWXusrmM2lqI/z/ALyQB9PwkEDI75JIeqQBwSMQSEACYAQBQSBgHobB2NZirhSg0jxrbdPVqTtJ9PcO0+2Wp03N4NS9vIWtPnlv0Xc7VsrZiUVJRWNKINI7z3kntJnpRiorCODr1p1puc92eiq5SxiJQAgBACAEA8flPtTwbCW4nLMooCA+U7EKvxOfslJy5Y5Nmzt/xFaNPvv8D5+Wq7H45MKrk2XOXuv8bQnF7D6h8SB2zBThzas9+/uY0o+HDRLY7ts+tMPTVhak0U0oERfojtJ7SeJPaSZtYwjmHLLyybYgwQVm0wCJYwAzgCgBnAKcXhktU12VrajeMrLqX/r6ZDSe5eFSUHmLwaTtnkOyZ2YVyw8bwR2/Yc/gffNedv1R7lnxlx92r9TUtRDFHBqsTqsjLpdW9Rmo4tbnSUq8KizFkpUzCygDzgkcAIAQSAMAIAjAMrZezrL7koqGbv8AdUdrnuAloRcnhGC4uIUKbnN7HaeTewa8JSKl6zt1rbctLWv3+gdw7J6NOCgsI4W8u53NRzl8ke3LmqEAIAQAgBACAYO0sBXfU1FiB63GTL+BB7COOchpNYZelUlTkpweGjxdh8jsNgxZ0FZ12nO2126SxsuC59gHcBCilsWrV51Zc0mZr4UyTEQ8GgD8GgEhhoBIYaABw0Ag2GgFbYeAVNWYB5O3OT9GJHyqddfEtXq2p6j2j0HdKzgpbmzb3dSg8xZz/bPJvEYbNyPCKF/tUXrIv004j17x6ZpzoNao6az4tTq+7LRnlJYGGYOoTA9D2YyUllEpBI4JCAKCcBACAZmytl24i4UVJrdus3mIPPY9g/kS8IOTwjXubqnbw55v+/gdi5Lcm6sHVpXr3Pp6a8jrOw7B3KOwfnN+nTUEcTfX1S6nmWy2XY2CZDSCAEAIAQAgBACAEAIBBqwYBU1EArNcAWmALKAEAUARWARNYgFTYeAVNhoBrW2uROHvJdR4Lc39rWoVWb6ScD8D6ZinSUj0LbiVag8ZyuzNL2nyUxVGZNXhVf62pSzafSnEezMemas6ElsdFbcZo1NJPD9Txgw39/m+UvrHZMLWD1ozjJZTyAkFwzgE6amdgiIzu3iqql29w3yUm9ikqkILMnhept2wub++4h7/ANEr7jk2Ib1LwX2+6Z4W7estDxrvjlKGlL3n9jpex9kU4avoqawi9p4u572biTNyMVFYRy1e4qV5c9R5Z6UsYQgBACAEAIAQAgBACAEAIAQAgEdIgCNYgEehEAXQwBGiALoIAdBADoIAjhoAvBBAMLH7Aw9/z2Hrt9LVhm9jcRKuKe6MtO4q0/LJr5nkvze4EnPoGHqxF6j3apR0YPobseL3cVjn+yLsPyHwKcMLr+tbdYPcWyhUYLoVnxa7l+f6YR7mEwNVQ011JUO5EVPwmRJLZGlOpObzJtmXJKBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIB/9k=" alt="Card image cap" />
        <CardBody>
        <h2 style={{color:'#0099FF',textShadow:' 0 0 10px skyblue',borderBottom:'2px solid goldenrod'}}>MUG PRINTING</h2>
        
        </CardBody>
      </Card>
    </Col>
    <Col lg={3}  style={{paddingTop:'10px'}} className='colborder'>
    <Card className="card">
        <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj2I3J39zqgCR7-6lD8l991wMQAhWb-86JAw&usqp=CAU" alt="Card image cap" />
        <CardBody>
        <h2 style={{color:'#0099FF',textShadow:' 0 0 10px skyblue',borderBottom:'2px solid goldenrod'}}>INDIAN ALBUM</h2>
        
        </CardBody>
      </Card>
    </Col>
    
  </Row>
</Container>


     

            
            <div className="mb-0" style={{marginBottom:'0px!important',paddingTop:'15px',paddingBottom:'0!important'}}>

         
<Jumbooo  />

              
              </div>

              </div>
    )
}

export default Home

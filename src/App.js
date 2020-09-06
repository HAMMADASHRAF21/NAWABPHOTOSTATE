import React,{useState,useEffect} from 'react';
import {Switch,Route,BrowserRouter as Router} from  'react-router-dom';
import './App.scss';
import Header from './Header';
import Home from './Home';
import { db  } from './firebase';
import Itemadd from './Itemadd';
import Checkout from './Checkout';
import Item from './Item';
import About from './About'
import Jumbooo from './Jumbooo';
import WebHead from './WebHead';



function App() {

  const [post,setpost] = useState([]);

  useEffect(()=> {

    db.collection('posts').onSnapshot(snapshot => {
    
      setpost(snapshot.docs.map(doc => ({id:doc.id , post:doc.data()}
      
      )))})
    } , [])


  return (
    <>
  
      <Switch>
      <Route path="/contact" >
      <Header />
      <About />
      <hr color='3 px solid rgb(241, 165, 165)'/>


</Route>
<Route path="/item" >
<div className="fixed-top">
  <Header  />

  </div>
  <hr color='1 px solid rgb(241, 165, 165)'/>

<div className="hammad" >
 {//price,image,disc,name
        post.map(({post,id }) => 
          (<Itemadd key={id}  id={id} price={post.price} image={post.image} disc={post.disc} name={post.name} />))
      }
      
      
</div>
<div style={{paddingTop:'20px'}}>
<Jumbooo  />
</div>
</Route>
<Route path="/search" >
<Header />
<hr color='1 px solid rgb(241, 165, 165)'/>
<Item />

</Route>
<Route path="/" >
<div className="fixed-top">
  <WebHead />
  </div>
  <div >
<Home />

  </div>


</Route>

      </Switch>



    
    </>
  );
}

export default App;

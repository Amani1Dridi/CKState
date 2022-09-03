import React, { Component } from 'react'

import FullName from './Components/fullname';
import Bio from './Components/bio';
import ImgSrc from './me.jpg';
import Profession from './Components/prof';
import {Card, CardGroup, CardImg} from "react-bootstrap";
import "./App.css"
 class App extends Component {
   constructor(props){
    super(props);
    this.state ={
      intervalle: null,
      timer: 0
    };
   }
  componentDidMount (){
    console.log("componentDidmount()");
    this.setState ({
      intervalle: setInterval(() =>{
    this.setState({ timer: this.state.timer +1});
   }, 1000),
  });
  }

  render() {
    return (
      <div style={{display:"flex" ,alignItems :"center" ,justifyContent:"center"}}>
       <button onClick={()=>this.setState({show:!this.state.show})} >Hide Data</button>
       {this.state.show ? (
         <div>
           <Card style={{ width: '26rem' }}>
  <CardImg src={ImgSrc} alt="It's My"  />
  <Card.Body>
    <Card.Title> <FullName /> </Card.Title>
    <Card.Text>
    <Bio />
    </Card.Text>
    <Profession />
  </Card.Body>
</Card>
     
         <h2> {this.state.timer} </h2>
         
         
        
         </div>
       ):( <div> </div> )}
      </div>
    )
  }
}

export default App
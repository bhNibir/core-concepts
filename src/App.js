import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros = [
    {name : "babu", Job : "Kichu na Kora"},
    {name : "babu", Job : "Kichu na Kora"},
    {name : "babu", Job : "Kichu na Kora"},
  ]
  const products = [
    {name : "Adobe Photoshop", price : "$500"},
    {name : "Adobe Reader", price : "$500"},
    {name : "Adobe XD", price : "$500"},
    {name : "Primere Pro", price : "$500"},
    {name : "Primere Pro", price : "$500"},
    {name : "Primere Pro", price : "$500"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>I'm A React Person</h1>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd => <Product item = {pd}></Product>)
        }

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick = {()=>{setCount(count+1)}}>Increase</button>
      <button onClick = {() => {setCount(count-1)}}>Decrase</button>
    </div>
  )
}


function Users(){
  const [users, setUser] = useState([])
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  },[]
  )
  return(
    <div>
      <ul>
         {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}


function Product(props){
  const productStyle={
    border: "2px solid gray",
    borderRadius: "5px",
    height: "300px",
    width: "300px",
    backgroundColor: "lightgray",
    color: "salmon",
    float: "left",
  }

  const {name, price} = props.item
  
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}



function Person(props){

  console.log(props);
  
  const style = {
    color : "tomato",
  }
  return (
  <div style={{margin: "10px", border: "10px solid cyan", padding: "10px"}}>
    <h1>Hero:{props.name} </h1>
    <h3>Heroin: {props.herion} </h3>
  </div>
  )
}

export default App;

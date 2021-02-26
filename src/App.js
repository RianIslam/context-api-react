import { useEffect, useState } from "react";
import "./App.css";



function App() {



    const [countries,setCountry]= useState([])
      
    useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res =>res.json())
      .then(data => setCountry(data))
    },[])
  







  const [nayoks,setNayoks] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setNayoks(data))
  },[])



  const products =[
    {name:'photoshop', price:'$90.99'},
    {name:'Illustrator',price:'$55.55'},
    {name:'PDF Reader',price: '$56.99'}
  ]
  const nayok = ["ragim","karim"]
  const productNames = products.map(product => product)
  console.log(productNames)

  const NayksName = nayok.map(nayok => nayok);
  console.log(NayksName)
  return (
    
    
    <div className="App">
    <h1>country loaded : {countries.length}</h1>
    <Counter></Counter>
    <Users></Users>
      <ul>
        {
          nayok.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        {
          products.map(product => <Product product={product}></Product>)
        }
    </ul>
    
      <Person  job="Software Engineer"></Person>
      <Person name="Kabir Ahammed" job="Software"></Person>
      <Nayok name="jasim"></Nayok>
      <Nayok name="Sakib Khan"></Nayok>
      <Nayok name="BappaRaz"></Nayok>
      <MovieCounter></MovieCounter>
    </div>
  );
}
function Counter(){
  const[count,setCount] = useState(10)
  // const handleIncrease = () =>{
  //   const newCount = count +1;
  //   setCount(newCount);
  // }
  // const handleIncrease = () =>{
  //   setCount(count+1);
  // }
  
  return(
    <div>
      <h1>Count : {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onMouseMove={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
     <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
 )
}

function Product(props){
  const productStyle = {
    border : '1px solid gray',
    backgroundColor:'lightgray',
    borderRadius:'5px',
    height: '200px',
    weight: '200px',
    float : 'left'

  }
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const someColor ={
    border: '2px solid blue',
    margin: '5px',
    width : '300px'
  }
  return (
    <div style={someColor}>
  
      <h1>Name:{props.name}</h1>
      <h4>Passion: {props.job}</h4>
    </div>
  );
}




function Nayok(props){
  const nayokStyle={
    border : '2px solid purple',
    margin : '20px'
  }
  const nayoks = ["Abul","Kabul","Sabul","Tabul","Mabul","Triabul"]
  return(
    <div style={nayokStyle}>
      <h1>Ami Nayol
      {
        nayoks.map(nayoks=><li>{nayoks}</li>)
      }
       </h1>
      
    </div>
  )
}


function MoviDisplay(props){
  return(
  <h3>Movies I Have acted:{props.movies} </h3>
  )
}


function MovieCounter(){
  const [count,setCount] = useState(5);

  const handleClick = () =>{
    setCount(count +1);
  }
  return(
    <div>
      <button  onClick={handleClick}>Add Movie</button>
      <h5>Number of Movies: {count}</h5>
      <MoviDisplay movies={count}></MoviDisplay>
      <MoviDisplay movies={count}></MoviDisplay>
      <MoviDisplay movies={count}></MoviDisplay>
      <MoviDisplay movies={count+30}></MoviDisplay>
    </div>
  )
}

export default App;

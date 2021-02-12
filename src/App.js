import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const exampleReq = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`

  const [counter, setcounter] = useState(0);

  useEffect(()=>{
    console.log('Effect has been run')
  })


  return (
 

    <div className="App">
    <form className="search__form">
      <input className="search__bar" type="text"/>
      <button className="search__button" type="submit">
      Search
      </button>
      <h1 onClick={()=>setcounter(counter +1)}>{counter}</h1>
    </form>
    </div>


  );
}

export default App;

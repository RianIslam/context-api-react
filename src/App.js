import { useEffect, useState } from "react";
import "./App.css";

function App() {
  

  const [counter, setcounter] = useState(0);

  useEffect(() => {
    
  }, []);

  const getRecipes = async () =>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
    const data =await response.json()
    console.log(data)
  }
  return (
    <div className="App">
      <form className="search__form">
        <input className="search__bar" type="text" />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;

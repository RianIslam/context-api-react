import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const [recipes,setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
    );
    const data = await response.json();
    setRecipes(data.meals[0]);
    console.log(data.meals[0])
  };
  return (
    <div className="App">
      <form className="search__form">
        <input className="search__bar" type="text" />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe=>(
        <Recipe/>
      ))}
    </div>
  );
}

export default App;

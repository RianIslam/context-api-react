import './App.css';


function App() {

  const exampleReq=`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`


  return (
 

    <div className="App">
    <form className="search__form">
      <input className="search__bar" type="text"/>
      <button className="search__button" type="submit"/>
    </form>
    </div>


  );
}

export default App;

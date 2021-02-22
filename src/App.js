import "./App.css";

function App() {

  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}
function Person(){
  const useIt ={
    width :"200px",
    border : "2px solid yellow",
    margin : "2px"
  }
  return(
    <div style={useIt}>
      <h2>Name:</h2>
      <p>Rian</p>
    </div>
  )
}

export default App;

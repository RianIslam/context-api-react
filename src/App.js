import "./App.css";

function App() {

  return (
    <div className="App">
      <Person name="rian"></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}
function Person(props){
  const useIt ={
    width :"200px",
    border : "2px solid yellow",
    margin : "2px"
  }
  return(
    <div style={useIt}>
      <h2>Name: Name={props.name}</h2>
      <p>Rian</p>
    </div>
  )
}

export default App;

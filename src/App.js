import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name="Rian Islam" job="Software Engineer"></Person>
      <Person name="Kabir Ahammed" job="Software"></Person>
    </div>
  );
}
function Product(){
  const productStyle = {

  }
  return(
    <div style={productStyle}>
      <h3>i am product</h3>
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

export default App;

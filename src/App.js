import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';

function App() {
  return (
    <MovieProvider>
    <div className="App">
    <Nav/>
    <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;

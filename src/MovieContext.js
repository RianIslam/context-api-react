import React, { useState, createContext } from "react";

export const MovieProvider = createContext();

const MovieContext = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Avengers",
      price: "$10",
      id: 2020,
    },
    {
      name: "Game of Thrones",
      price: "$20",
      id: 20303,
    },
    {
      name: "inception",
      price: "$99",
      id: 39485,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;

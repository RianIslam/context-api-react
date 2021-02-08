import React, { useContext, useState } from 'react'

import {MovieContext} from './MovieContext';

const MovieList = () => {

    const value = useContext(MovieContext)

    return (

        <div>
        <h1>{value}</h1>
            {/* {movies.map(movie => (
               <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))} */}
        </div>
    )
}

export default MovieList

import React, { useState } from 'react'

const MovieList = () => {
    const [movies,setMovies] = useState([
        {
            name:"Avengers",
            price:"$10",
            id:2020
        },
        {
            name:"Game of Thrones",
            price:"$20",
            id:20303
        },
        {
            name:"inception",
            price:"$99",
            id:39485
        }
    ]);
    return (

        <div>
            {movies.map(movie => (
                <li>{movie.name}</li>
            ))}
        </div>
    )
}

export default MovieList

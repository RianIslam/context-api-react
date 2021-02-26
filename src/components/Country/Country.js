import React from 'react'

const Country = (props) => {
        const{name,population,region,flag} = props.country
        const flagStyle ={height:'50px'}
        const countryStyle = {border: '1px solid red',margin: '10px',padding: '10px'}
        const handleCountry =props.handleCountry;
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population{population}</p>
            <p> <small>Region:{region}</small> </p>
            <button onClick={() =>handleCountry(props.country)}>Add country</button>
        </div>
    )
}

export default Country

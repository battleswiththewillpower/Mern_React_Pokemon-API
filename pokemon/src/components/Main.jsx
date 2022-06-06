import React, { useState }  from 'react'


const Main = () => {
    const [pokemon, setPokemon] = useState([]);

const fetchThePokemon = () => {
    // alert("Ashley for the win $$$$$$")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
          .then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            setPokemon(jsonResponse.results)
        }).catch(err=>{
            console.log(err);
        });
}
  return (
    <div>
        <h1>Pokémon</h1>
        <button onClick={fetchThePokemon}>Fetch Pokemon</button>

      { 
          pokemon.map((eachPoke, i) =>{
              return(
                  <div key={i}>
                      {eachPoke.name}
                  </div>
              )
          })
      }


    </div>  
    
    )
}

export default Main
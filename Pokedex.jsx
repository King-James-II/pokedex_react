import React, {useState, useEffect} from "react"; // Import React library and hooks

// Define the Pokedex component
function Pokedex() {
   const [pokemons, setPokemons] = useState([{"name":"Bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"Ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"Venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"}]); // State for Pokemon data

  // Function to fetch Pokemon data
  const fetchPokemons = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => setPokemons(data.results))
  };

  // useEffect hook to fetch Pokemon data on component mount
  useEffect(() => {
    fetchPokemons();
  }, []);
  

  // Return the JSX for the Pokedex component
  return (
    <div className="pokedex">
      <h2>All Pokemon</h2> {/* Title */}
      <ul> {/* Pokemon list */}
        {pokemons.map((pokemon,dex) => (
          <li key={pokemon.name}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dex+1}.png`} alt={pokemon.name} /> {/* Pokemon image */}
            {pokemon.name} {/* Pokemon name */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex; // Export the Pokedex component

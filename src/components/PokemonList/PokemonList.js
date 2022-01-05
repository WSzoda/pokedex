import { useState, useEffect } from "react";

import ListButton from "./ListButton/ListButton";
import "./PokemonList.css";

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    downloadPokemonList();
  }, []);

  async function downloadPokemonList() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=649");
    const json = await res.json();
    setPokemons(json.results);
  }

  function renderListButton(pokemon) {
    return (
      <ListButton
        pokemon={pokemon}
        setSelectedPokemon={props.setSelectedPokemon}
      />
    );
  }

  function renderPokemonList() {
    var poke;
    if (props.searchWord === "") {
      poke = pokemons.map((pokemon) => {
        return renderListButton(pokemon);
      });
    } else {
      poke = pokemons.map((pokemon) => {
        if (pokemon.name.includes(props.searchWord)) {
          return renderListButton(pokemon);
        }
        return null;
      });
    }
    return poke;
  }

  return <ul className="list">{renderPokemonList()}</ul>;
}

export default PokemonList;

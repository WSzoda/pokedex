import { useState, useEffect } from "react"

import ListButton from "./ListButton";

function PokemonList(props) {
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        downlaodPokemonList();
    }, [])

    async function downlaodPokemonList(){
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1200');
        const json = await res.json();
        setPokemons(json.results);
    }

    function renderPokemonList(){
        var poke;
        if(props.searchWord === ""){
            poke = pokemons.map((pokemon) => {
                return(
                    <ListButton pokemon={pokemon} setSelectedPokemon={props.setSelectedPokemon}/>
                );
            })
        } else{
            poke = pokemons.map((pokemon) => {
                if(pokemon.name.includes(props.searchWord)){
                return(
                    <ListButton pokemon={pokemon} setSelectedPokemon={props.setSelectedPokemon}/>
                );
            }
            return null;
            })
        }
        return poke;
    }


    return(
        <nav>
            <ul>
                {renderPokemonList()}
            </ul>
        </nav>
    );
}

export default PokemonList;

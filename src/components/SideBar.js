import { useState } from "react";

import PokemonList from "./PokemonList";

function SideBar(props) {
    const [searchedPokemon, setSearchedPokemon] = useState("");
    return(
        <div>
            <input placeholder="Type pokemon name" onChange={(e) => {setSearchedPokemon(e.target.value)}} value={searchedPokemon}></input>
            <PokemonList searchWord={searchedPokemon} setSelectedPokemon={props.setSelectedPokemon}/>
        </div>
    );
}

export default SideBar;
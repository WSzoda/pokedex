import { useState } from "react";

import PokemonList from "./PokemonList";

function SideBar() {
    const [pokemon, setPokemon] = useState("");
    return(
        <div>
            <input placeholder="Type pokemon name" onChange={(e) => {setPokemon(e.target.value)}} value={pokemon}></input>
            <PokemonList searchWord={pokemon}/>
        </div>
    );
}

export default SideBar;
import { useState } from "react";
import "./SideBar.css"

import PokemonList from "./PokemonList";

function SideBar(props) {
    const [searchedPokemon, setSearchedPokemon] = useState("");
    const [menuOpened, setMenuOpened] = useState(true);

    let sidebarClasses = "sidebar";
    if(!menuOpened){
        sidebarClasses += " closed";
    }

    return(
        <div className={sidebarClasses}>
            <input  className="list-input" placeholder="Type pokemon name" onChange={(e) => {setSearchedPokemon(e.target.value)}} value={searchedPokemon} />
            <PokemonList searchWord={searchedPokemon} setSelectedPokemon={props.setSelectedPokemon}/>
            <button onClick={() => setMenuOpened(!menuOpened)} className="sidebar-button">ot</button>
        </div>
    );
}

export default SideBar;
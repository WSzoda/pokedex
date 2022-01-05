import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import { useState } from "react";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur");
  return (
    <div className="app">
      <PokemonInfo selectedPokemon={selectedPokemon} />
      <SideBar setSelectedPokemon={setSelectedPokemon} />
    </div>
  );
}

export default App;

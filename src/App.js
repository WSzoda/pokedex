import './App.css';
import SideBar from './components/SideBar';
import PokemonInfo from './components/PokemonInfo';
import {useState} from "react";

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');
  return (
      <div>
          <PokemonInfo selectedPokemon={selectedPokemon}/>
          <SideBar setSelectedPokemon={setSelectedPokemon}/>
      </div>
  );
}

export default App;

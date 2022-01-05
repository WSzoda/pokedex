import { useEffect, useState } from "react";

import "./PokemonInfo.css";
import loadingImage from "./loading.gif";

function PokemonInfo(props) {
  const [selectedPokemonInfo, setSelectedPokemonInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    downloadPokemonInfo();
  }, []);
  useEffect(() => {
    downloadPokemonInfo();
  }, [props.selectedPokemon]);

  async function downloadPokemonInfo() {
    setIsLoading(true);
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + props.selectedPokemon
    );
    const json = await res.json();
    setSelectedPokemonInfo(json);
    setIsLoading(false);
  }

  if (isLoading) {
    return <img src={loadingImage} className="loadingImage" alt="Loading"/>;
  } else {
    return (
      <div className="pokemon-info-container">
        <h1>{selectedPokemonInfo.name}</h1>
        <img src={selectedPokemonInfo.sprites.other.home.front_default} alt="of pokemon"/>
      </div>
    );
  }
}
export default PokemonInfo;

import {useEffect, useState} from "react";

function PokemonInfo(props){
    const [selectedPokemonInfo, setSelectedPokemonInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        downloadPokemonInfo();
    },[])
    useEffect(() => {
        downloadPokemonInfo();
    },[props.selectedPokemon])

    async function downloadPokemonInfo(){
        setIsLoading(true);
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + props.selectedPokemon);
        const json = await res.json();
        setSelectedPokemonInfo(json);
        setIsLoading(false);
    }

    if(isLoading){
        return(
            <h1>Loading</h1>
        );
    } else {
        return(
            <div>
                <h1>{selectedPokemonInfo.name}</h1>
            </div>
        );
    }
}
export default PokemonInfo;
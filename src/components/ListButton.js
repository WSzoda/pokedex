
function ListButton(props){
    return(
        <li key={props.pokemon.name}><button onClick={() => {props.setSelectedPokemon(props.pokemon.name)}}>{props.pokemon.name}</button></li>
    )

}

export default ListButton;
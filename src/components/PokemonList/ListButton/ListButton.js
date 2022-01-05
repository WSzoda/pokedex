import "./ListButton.css";

function ListButton(props) {
  return (
    <li key={props.pokemon.name} className="list-button">
      <button
        onClick={() => {
          props.setSelectedPokemon(props.pokemon.name);
        }}
      >
        {props.pokemon.name}
      </button>
    </li>
  );
}

export default ListButton;

//que pinte la lista de pokemons

import Pokemon from "./Pokemon";

function PokeList(props) {
  const pokemons = props.list.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id}>
        <Pokemon pokemonProp={pokemonItem} />
      </li>
    );
  });
  return <ul>{pokemons}</ul>;
}

export default PokeList;

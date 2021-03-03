import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../stylesheets/PokeList.scss";

function PokeList(props) {
  const pokemons = props.list.map((pokemonItem) => {
    return (
      <li className="PokeList__card" key={pokemonItem.id.toString()}>
        <Pokemon pokemonProp={pokemonItem} />
      </li>
    );
  });
  return <ul className="PokeList"> {pokemons}</ul>;
}

export default PokeList;

PokeList.propTypes = {
  pokemonItem: PropTypes.array,
};

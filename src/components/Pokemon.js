import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Pokemon.scss";

class Pokemon extends React.Component {
  render() {
    const pokemonTypes = this.props.pokemonProp.types.map(
      (pokemonType, index) => {
        return (
          <li className="type" key={index}>
            {pokemonType}
          </li>
        );
      }
    );
    return (
      <>
        <img
          src={this.props.pokemonProp.url}
          alt={`Imagen de ` + this.props.pokemonProp.name}
        ></img>
        <h3 className="name">{this.props.pokemonProp.name}</h3>
        <ul className="typesList">{pokemonTypes}</ul>
      </>
    );
  }
}
export default Pokemon;

Pokemon.propTypes = {
  pokemonProp: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    types: PropTypes.array,
    evolution: PropTypes.string,
    url: PropTypes.string,
  }),
};

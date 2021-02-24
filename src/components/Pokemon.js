import React from "react";

class Pokemon extends React.Component {
  render() {
    const pokemonTypes = this.props.pokemonProp.types.map(
      (pokemonType, index) => {
        return (
          <li key={index} id={pokemonType.id}>
            {pokemonType}
          </li>
        );
      }
    );
    return (
      <>
        <img src={this.props.pokemonProp.url}></img>
        <h3>{this.props.pokemonProp.name}</h3>
        <ul>{pokemonTypes}</ul>
      </>
    );
  }
}
export default Pokemon;

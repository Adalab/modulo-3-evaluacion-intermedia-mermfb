//que pinte cada pokemon

function Pokemon(props) {
  const pokemonTypes = props.pokemonProp.types.map((pokemonType, index) => {
    return (
      <li key={index} id={pokemonType.id}>
        {pokemonType}
      </li>
    );
  });
  return (
    <>
      <img src={props.pokemonProp.url}></img>
      <h3>{props.pokemonProp.name}</h3>
      <ul>{pokemonTypes}</ul>
    </>
  );
}

export default Pokemon;

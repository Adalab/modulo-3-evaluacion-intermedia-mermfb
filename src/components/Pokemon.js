//que pinte cada pokemon

function Pokemon(props) {
  const pokemonTypes = props.pokemonProp.types.map((pokemonType) => {
    return (
      <li key={props.pokemonProp.id} id={props.pokemonProp.id}>
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

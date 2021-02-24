//que pinte cada pokemon

function Pokemon(props) {
  const pokemonExtra = props.pokemonProp.types.map((pokemonType) => {
    return (
      <li key={props.pokemonProp.id} id={props.pokemonProp.id}>
        {pokemonType}
      </li>
    );
  });
  return (
    <article>
      <img src={props.pokemonProp.url}></img>
      <h3>{props.pokemonProp.name}</h3>
      <ul>{pokemonExtra}</ul>
    </article>
  );
}

export default Pokemon;

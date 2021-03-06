import { useState } from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import Pokemondata from "../data/data.json";

function App() {
  const data = Pokemondata;
  return (
    <div className="App">
      <h1>Mi lista de Pokemons</h1>
      <PokeList list={data} />
    </div>
  );
}

export default App;

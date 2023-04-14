import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(response => response.json())
      .then(data => setPokemon(data))
  }, [])

  function handleSearch(searchInput) {
    setSearch(searchInput)
  }

  function handleAddNew(newPokemon) {
    setPokemon([
      ...pokemon,
      newPokemon,
    ])
  }

  const searchedPokemon = pokemon.filter(poke => poke.name.includes(search))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNew={handleAddNew} />
      <br />
      <Search onSearch={handleSearch} searchInput={search} />
      <br />
      <PokemonCollection pokemon={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;

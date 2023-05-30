import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Container from "../../components/common/container";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const results = response.data.results;
        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            const { id, name, types, sprites, ...rest } = pokemonResponse.data;
            const number = `#${id.toString().padStart(3, '0')}`;
            const imageUrl = sprites.front_default;
            const pokemonTypes = types.map((type) => type.type.name);
            return { id, number, name, imageUrl, types: pokemonTypes, ...rest };
          })
        );
        setPokemons((prev) => [...prev, ...pokemonDetails]);
      } catch (error) {
        console.error("Error in fetching pokemon: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, [offset]);

  const handleEndReached = () => {
    setOffset((prev) => prev + 20);
  };

  return (
    <Container>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item: pokemon, index }) => {
          return <PokemonCard pokemon={pokemon} />;
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        numColumns={2}
        ListFooterComponent={
          isLoading && <ActivityIndicator size="large" color="blue" />
        }
      />
    </Container>
  );
};

export default Home;

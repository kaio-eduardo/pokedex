import { View, Text, ActivityIndicator } from "react-native";
import Container from "../../components/common/container";
import { useEffect, useState } from "react";
import axios from "axios";

const Evolutions = ({ route, navigation }) => {
  const { id } = route.params
  const [evolutionChain, setEvolutionChain] = useState(null)
  console.log(id);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        // Fetching Pokemon evolution chain data
        const evolutionChainResponse = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
        setEvolutionChain(evolutionChainResponse.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    }
    fetchPokemonDetails()
  }, [id])

  console.log(evolutionChain);

  return (
    <Container>
      { evolutionChain ? "" : <ActivityIndicator size="large" color="blue" />}
    </Container>
  );
};

export default Evolutions;

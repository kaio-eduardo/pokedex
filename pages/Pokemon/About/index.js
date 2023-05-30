import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

const About = ({ pokemon }) => {
  const [species, setSpecies] = useState(null);
  console.log(species);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const speciesResponse = await axios.get(pokemon.species.url);
        setSpecies(speciesResponse.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon]);

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          height: 60,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 8,
          padding: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.baseTitle}>Altura:</Text>
          <Text style={styles.dataText}>{pokemon.height / 10} m</Text>
        </View>
        <View>
          <Text style={styles.baseTitle}>Peso:</Text>
          <Text style={styles.dataText}>{pokemon.weight / 10} kg</Text>
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <Text style={styles.Title}>Tipos: </Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
          {pokemon.types.map((type, index) => (
            <Text
              key={index}
              style={{
                backgroundColor: "rgba(0,0,0,.4)",
                width: 60,
                textAlign: "center",
                color: "white",
                padding: 5,
                borderRadius: 10,
                fontWeight: "bold",
              }}
            >
              {type}
            </Text>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <Text style={styles.Title}>Movimentos: </Text>
        <View style={{ flexDirection: "column", gap: 5, marginTop: 5 }}>
          {pokemon.moves.slice(0, 5).map(({ move: { name } }, index) => (
            <Text
              key={index}
              style={{
                backgroundColor: "rgba(0,0,0,.4)",
                textAlign: "center",
                color: "white",
                padding: 5,
                borderRadius: 10,
                fontWeight: "bold",
              }}
            >
              {name}
            </Text>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <Text style={styles.Title}>Características: </Text>
        {species ? (
          <View style={{ flexDirection: "column", gap: 5, marginTop: 5 }}>
              <Text style={styles.descText}>Especie: {species.name}</Text>
              <Text style={styles.descText}>Habitat: {species.habitat ? species.habitat.name : 'Unknown'}</Text>
          </View>
        ) : <ActivityIndicator size="small" color="blue" />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  baseTitle: {
    fontWeight: "bold",
    color: "rgba(0,0,0,.5)",
  },
  dataText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  descText: {
    fontWeight: "bold",
    fontSize: 15,
  }
});

export default About;

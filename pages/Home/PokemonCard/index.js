import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMemo } from "react";

import { getColorByType } from "../../../utils/index";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();

  const backgroundColor = useMemo(
    () => getColorByType(pokemon.types[0]),
    [pokemon.types]
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Pokemon", {
            pokemon,
          })
        }
        style={{ ...styles.btn, backgroundColor }}
      >
        <View>
          <Text style={styles.pkmNameText}>{pokemon.name}</Text>
        </View>

        <View style={styles.pkmNum}>
          <Text style={styles.pkmNumText}>{pokemon.number}</Text>
        </View>

        <View style={styles.pkmImageContainer}>
          <Image source={{ uri: pokemon.imageUrl }} style={styles.pkmImage} />
        </View>

        <View>
          {pokemon.types.map((type, index) => (
            <View style={styles.typeContainer} key={index}>
              <Text style={styles.typeText}>{type}</Text>
            </View>
          ))}
        </View>

        <View style={styles.colorBack}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    position: "relative",
    overflow: "hidden",
    height: 110,
    margin: 5,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "red",
  },
  pkmNum: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  pkmNumText: {
    fontWeight: "bold",
    color: "#6B0900",
  },
  pkmImageContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  pkmImage: {
    height: 80,
    width: 80,
  },
  pkmNameText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white"
  },
  colorBack: {
    position: "absolute",
    right: -10,
    bottom: -10,
    borderRadius: 45,
    zIndex: -1,
    height: 90,
    width: 90,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  typeText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
  },
  typeContainer: {
    width: 65,
    marginTop: 4,
    padding: 2,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
  },
});

export default PokemonCard;

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Translation = {
  hp: "HP",
  attack: "Ataque",
  defense: "Defesa",
  speed: "Velocidade",
};

const Status = ({ pokemon }) => {

  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('Evolutions', {
      id: pokemon.id
    });
  };

  return (
    <View style={{ marginTop: 8 }}>
      {pokemon.stats.map((stat) => (
        <View
          key={stat.stat.name}
          style={{ marginTop: 8, flexDirection: "row", gap: 10 }}
        >
          <Text style={styles.title}>
            {Translation[stat.stat.name] || stat.stat.name}:
          </Text>
          <Text style={styles.data}>{stat.base_stat}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={{
          marginTop: 15,
          width: "100%",
          borderWidth: 1,
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        onPress={handleNavigation}
      >
        <Text style={styles.btnText}>Ver evoluções</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "rgba(0,0,0,.5)",
  },
  data: {
    fontWeight: "bold",
    fontSize: 16,
  },
  btnText: {
    fontWeight: "bold"
  }
});

export default Status;

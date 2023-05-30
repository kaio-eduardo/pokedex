import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Container from "../../components/common/container";
import { useMemo, useState } from "react";
import { getColorByType } from "../../utils";
import About from "./About";
import Status from "./Status";

const tabs = [
  { name: "Sobre" },
  { name: "Status" },
];

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Pokemon = ({ route, navigation }) => {
  const { pokemon } = route.params;

  const [activeTab, setActiveTab] = useState(0)

  const backgroundColor = useMemo(
    () => getColorByType(pokemon.types[0]),
    [pokemon.types]
  );

  const renderPage = () => {
    switch (activeTab) {
      case 0:
        return <About pokemon={pokemon}/>;
      case 1:
        return <Status pokemon={pokemon}/>;
      default:
        return null;
    }
  };

  return (
    <Container backColor={backgroundColor} ph={0}>
      <View style={styles.headerContainer}>
        <View
          style={{
            width: 200,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: pokemon.imageUrl }}
            style={{
              height: 300,
              width: 300,
              resizeMode: "contain",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: 150,
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 16,
          borderTopStartRadius: 32,
          borderTopEndRadius: 32,
          position: "relative"
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{ capitalizeFirstLetter(pokemon.name) } { pokemon.number }</Text>
        </View>
        <View style={styles.Tabs}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              style={styles.TabButton}
              key={index}
              onPress={() => setActiveTab(index)}
            >
              <Text bold style={{ color: "black" }}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderPage()}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  Tabs: {
    padding: 16,
    marginVertical: 0,
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.2)",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  TabButton: {
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Pokemon;

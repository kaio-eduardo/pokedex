import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import Evolutions from "../pages/Evolutions"

const Stack = createNativeStackNavigator()

const PokedexNavigation = () => {
    return ( 
        <Stack.Navigator initialRouteName="Pokédex">
            <Stack.Screen name="Pokedex" options={{
                headerShadowVisible: false,
            }} component={Home}/>
            <Stack.Screen name="Pokemon" options={{
                headerTransparent: true,
                title: "",
                headerTintColor: "#fefefe",
                headerShadowVisible: false
            }} component={Pokemon}/>
            <Stack.Screen name="Evolutions" options={{
                title: "Corrente de evolução",
                headerShadowVisible: false
            }} component={Evolutions}/>
        </Stack.Navigator>
    )
}

export default PokedexNavigation
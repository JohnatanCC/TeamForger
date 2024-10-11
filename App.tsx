import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/home";
import CharacterSelection from "./src/CharacterSelection";
import CharacterDetails from "./src/CharacterDetails";
import TeamDetails from "./src/TeamDetails";
import Toast from "react-native-toast-message";  // Importar o Toast

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CharacterSelection" component={CharacterSelection} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="TeamDetails" component={TeamDetails} />
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
};

export default App;

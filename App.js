import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/index";

export default function App() {
     return (
          <NavigationContainer>

               <Home />
  
          </NavigationContainer>
     );
}

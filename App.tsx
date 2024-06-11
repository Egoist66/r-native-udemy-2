import { View, StyleSheet } from "react-native";
import StartGameScreen from "./screens/startGameScreen";

export default function App() {
  return (
    <View style={style.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const style = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
  }
});
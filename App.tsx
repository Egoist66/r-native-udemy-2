import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {

  const bgAppImage = require('./assets/images/background.png');
 
  return (
    <LinearGradient colors={['#3b021f','#ddb52f']} style={style.rootScreen}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.2 }}
        source={bgAppImage}>
          
        <StartGameScreen />
      </ImageBackground>
   
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
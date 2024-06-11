import { Alert, StyleSheet, TextInput, View } from "react-native";
import { PrimaryButton } from "../components/custom/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        style={[styles.textInput]}
        keyboardType="number-pad"
        placeholderTextColor={"#ddb52f"}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
        placeholder="Enter a number"
      />

      <View style={[styles.controls]}>
        <View style={[styles.controlsContainer]}>
          <PrimaryButton
            events={{
              onPress: () => Alert.alert("Pressed"),
              onLongPress: () => Alert.alert("Long Press"),
            }}
            style={{ color: "#FFF", textAlign: "center", width: '100%' }}
          >
            Reset
          </PrimaryButton>
        </View>
        <View style={[styles.controlsContainer]}>
          <PrimaryButton style={{ color: "#FFF", textAlign: "center" }}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    height: 50,
    width: "80%",
    margin: "auto",
    fontSize: 32,
    textAlign: "center",
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
  },

  controlsContainer: {
    flex: 1,
  }
});

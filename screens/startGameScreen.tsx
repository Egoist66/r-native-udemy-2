import { StyleSheet, SafeAreaView, TextInput } from "react-native";
import { PrimaryButton } from "../components/custom/PrimaryButton";

export default function StartGameScreen() {
  return (
    <SafeAreaView style={[styles.inputContainer]}>
      <TextInput
        keyboardType="number-pad"
        placeholder="Enter a number"
      />

      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
    }
})
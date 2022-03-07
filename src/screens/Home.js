import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { useDispatch } from "react-redux";

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  function onPress(persona) {
    dispatch({
      type: persona,
    });
    navigation.push("Master");
  }

  return (
    <View style={styles.container}>
      <Button
        name={"single"}
        onPress={() => {
          onPress("Single");
        }}
        style={styles.button}
      />
      <Button
        name={"married"}
        onPress={() => {
          onPress("Married");
        }}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "grey",
    margin: 20,
    width: 200,
    height: 40,
    padding: 10,
    borderRadius: 20,
  },
});

import React, { } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Selector = (props) => {
  return (
    <View style={styles.selector}>
      <Button
        name={"-"}
        style={[styles.buttonSelector, {}]}
        styleText={{ color: "black", fontSize: 40 }}
        onPress={() => {
          props.onQuitPress();
        }}
      />
      <Text style={styles.quantity}>{props.quantity}</Text>
      <Button
        name={"+"}
        style={[styles.buttonSelector, {}]}
        styleText={{ color: "black", fontSize: 40 }}
        onPress={() => {
          props.onAddPress();
        }}
      />
    </View>
  );
};

export default Selector;

const styles = StyleSheet.create({
  buttonSelector: {
    height: 50,
    width: 20,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  selector: {
    width: 100,
    height: 50,
    borderRadius: 40,
    alignContent: "flex-start",
    borderColor: "gainsboro",
    justifyContent: "center",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontSize: 20,
    color: "black",
  },
});

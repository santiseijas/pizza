import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button(props) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}
      >
        <Text style={[props.styleText]}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});

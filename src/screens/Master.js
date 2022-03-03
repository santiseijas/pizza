import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { data } from "../data/data";

const { width, height } = Dimensions.get("window");

export default function Master({ navigation }) {
  const renderPizza = ({ item, index }) => {
    return (
      <View style={styles.itemView}>
        <TouchableOpacity onPress={() => navigation.push("Detail", item)}>
          <Image source={{ uri: item.imageUrl }} style={styles.pizzaImg} />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff", height: height }}>
      <FlatList data={data} renderItem={renderPizza} numColumns={2}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  pizzaImg: {
    height: 150,
    width: 150,
    borderRadius: 40,
  },
});

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
import { connect } from "react-redux";
import { data } from "../data/data";

const { width, height } = Dimensions.get("window");

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
function Master(props) {
  const renderPizza = ({ item, index }) => {
    return (
      <View style={styles.itemView}>
        <TouchableOpacity onPress={() => props.navigation.push("Detail", item)}>
          <Image source={{ uri: item.imageUrl }} style={styles.pizzaImg} />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff", height: height }}>
      <FlatList data={data} renderItem={renderPizza} numColumns={2}keyExtractor={data.id}></FlatList>
    </View>
  );
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    person:state.person
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product, quantity,size) =>
      dispatch(addProductToCart(product, quantity,size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import data from "../data/data";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: "row",
    justifyContent:'space-around'
  },
  pizzaImg: {
    height: 130,
    width: 130,
    borderRadius: 40,
  },
  nameAndValue: {
    flexDirection: "column",
    justifyContent: "center",
  },
  price: {
    justifyContent: "center",
  },
  priceText: {
    fontSize: 40,
    alignSelf:'flex-end',
  },
});

const ConfirmationScreen = (props) => {

  return (
    <View style={styles.container}>
      {props.cart.map((element) => {


          const a = element.product.prices.find(e=>e.size===element.size)
        return (
          <View style={styles.item}>
            <Image
              source={{ uri: element.product.imageUrl }}
              style={styles.pizzaImg}
            />
            <View style={styles.nameAndValue}>
              <Text>{element.product.name}</Text>
              <Text>quantity:{element.quantity}</Text>
            </View>
            <View style={styles.price}>
            <Text style={styles.priceText}>{a.price*element.quantity}$</Text>

            </View>
          </View>
        );
      })}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    person: state.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product, quantity, size) =>
      dispatch(addProductToCart(product, quantity, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen);

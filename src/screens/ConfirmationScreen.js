import React, { createContext, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import data from "../data/data";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  pizzaImg: {
    height: 130,
    width: 130,
    borderRadius: 40,
    left: 0,
  },
  filmImg: {
    height: 130,
    width: 130,
    borderRadius: 20,
  },
  nameAndValue: {
    flexDirection: "column",
    justifyContent: "center",
  },
  price: {
    justifyContent: "center",
    right: 0,
  },
  priceText: {
    fontSize: 40,
    alignSelf: "flex-end",
  },
});

const ConfirmationScreen = (props) => {
  console.log(props);

  return (
    <View style={styles.container}>
      {props?.cart?.map((element) => {
        if (element.film) {
          return (
            <View style={styles.item}>
              <Image
                source={{
                  uri:
                    "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UY720_.jpg",
                }}
                style={styles.filmImg}
              />
              <View style={styles.nameAndValue}>
                <Text>Film</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>20$</Text>
              </View>
            </View>
          );
        }
        const a = element.product.prices.find((e) => e.size === element.size);
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
              <Text style={styles.priceText}>
                {a.price * element.quantity}$
              </Text>
              <Button></Button>
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

import React, { createContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import data from "../data/data";
import Button from "../components/Button";
import { removeProductFromCart } from "../redux/actions/cart";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    height: height,
  },
  container: {
    marginTop: 20,
    flex: 1,
  },

  item: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  pizzaImg: {
    height: 100,
    width: 100,
    borderRadius: 40,
    left: 0,
  },
  filmImg: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  nameAndValue: {
    flexDirection: "column",
    justifyContent: "center",
    right: 20,
    width: width / 2.5,
  },
  price: {
    justifyContent: "center",
    right: 0,
  },
  priceText: {
    fontSize: 25,
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "gainsboro",
    width: width - 30,
    height: 60,
    borderRadius: 40,
    paddingHorizontal: 15,
    bottom: 40,
  },
});

const ConfirmationScreen = (props) => {
  const [filmAdded, setFilmAdded] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  let totalPrices = [];
  useEffect(() => {
    setTotalPrice(calculateTotal());
  });

  const calculateTotal = () => {
    const film = props.cart.find((element) => element.film);
    let totalPrice;
    if (totalPrices.length > 0) {
      totalPrice = totalPrices.reduce((a, b) => a + b, 0);
    } else {
      totalPrice = totalPrices[0];
    }
    if (film) {
      return totalPrice + 20;
    } else {
      return totalPrice;
    }
  };

  const renderPizza = (pizza) => {
    const price = pizza.product.prices.find((p) => p.size === pizza.size);
    totalPrices.push(price.price * pizza.quantity);
    return (
      <View style={styles.item}>
        <Image
          source={{ uri: pizza.product.imageUrl }}
          style={styles.pizzaImg}
        />
        <View style={styles.nameAndValue}>
          <Text>{pizza.product.name}</Text>
          <Text>quantity:{pizza.quantity}</Text>
          <Text>size:{pizza.size}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>{price.price * pizza.quantity}$</Text>
          <Button style={{height:20,width:20,backgroundColor:'red'}} onPress={() => {
            props.removeProductFromCart(pizza);

          }}>

          </Button>
        </View>
      </View>
    );
  };

  const renderFilm = () => {
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
  };
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {props.film && renderFilm()}
        {props?.cart?.map((element) => (
          <View>
            {element.length > 1
              ? element.map((pizza) => {
                  return renderPizza(pizza);
                })
              : renderPizza(element)}
          </View>
        ))}
        <View></View>
      </View>
      <View style={styles.bottom}>
        <Button
          name={"PAY" + " " + totalPrice + "$"}
          style={styles.button}
          styleText={{ color: "black", fontSize: 20 }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    person: state.person,
    film: state.film,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product, quantity, size) =>
      dispatch(addProductToCart(product, quantity, size)),
      removeProductFromCart:(product)=>dispatch(removeProductFromCart(product))

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationScreen);

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import Button from "../components/Button";
import Selector from "../components/Selector";
import { addProductToCart } from "../redux/actions/cart";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  pizzaImg: {
    height: 300,
    width: width - 30,
    borderRadius: 40,
  },
  content: {
    fontSize: 20,
    marginTop: 20,
    color: "black",
  },
  button: {
    backgroundColor: "gainsboro",
    width: width - 30,
    height: 60,
    borderRadius: 40,
    paddingHorizontal: 15,
    bottom: 20,
  },
  discount: {
    color: "red",
    fontSize: 20,
  },
  advertisment: {
    color: "dodgerblue",
    fontSize: 20,
  },
  buttonSize: {
    minWidth: 60,
    borderColor: "gainsboro",
    borderWidth: 2,
    borderRadius: 40,
  },
  selectorAndPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  price: {
    fontSize: 40,
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Detail = (props) => {
  const data = props.route.params;

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [index, setIndex] = useState();
  const [unitaryPrice, setUnitaryPrice] = useState();

  const selectColor = (item, colorSelected, colorUnselected) => {
    let color = "";
    if (index !== item.index) {
      if (props.person.type === "Single") {
        if (item.item.size === "M" || item.item.size === "L") {
          return "dodgerblue";
        } else {
          return colorUnselected;
        }
      } else {
        if (item.item.size === "L" || item.item.size === "XL") {
          return "dodgerblue";
        } else {
          return colorUnselected;
        }
      }
    } else {
      return colorSelected;
    }
  };

  const selectTextColor = (buttonColor) => {
    switch (buttonColor) {
      case "white":
        return "black";
      case "dodgerblue":
        return "white";
      default:
        return "white";
    }
  };

  const renderSizes = (data) => {
    return (
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Button
          name={data.item.size}
          style={[
            styles.buttonSize,
            {
              backgroundColor: selectColor(
                data,
                "black",
                "white",
                data.item.size
              ),
            },
          ]}
          styleText={{
            color: selectTextColor(
              selectColor(data, "black", "white", data.item.size)
            ),
            fontSize: 30,
          }}
          onPress={() => {
            setUnitaryPrice(data.item.price);
            setPrice(data.item.price);
            setSize(data.item.size);
            setIndex(data.index);
            setQuantity(1);
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{ backgroundColor: "#fff", height: height, paddingHorizontal: 15 }}
    >
      <View
        style={{ alignItems: "center", marginTop: 10, marginHorizontal: 10 }}
      >
        <Image source={{ uri: data.imageUrl }} style={styles.pizzaImg} />
        <Text style={styles.name}>{data.name}</Text>
      </View>
      <View style={styles.selectorAndPrice}>
        <Selector
          quantity={quantity}
          onAddPress={() => {
            setQuantity(quantity + 1);
            setPrice(unitaryPrice * (quantity + 1));
          }}
          onQuitPress={() => {
            if (quantity === 0) return;
            setQuantity(quantity - 1);
            setPrice(unitaryPrice * (quantity - 1));
          }}
        />
        {!isNaN(price) && (
          <Text style={styles.price}>{price.toFixed(2) + "$"}</Text>
        )}
      </View>
      <View style={{}}>
        <Text style={styles.content}>{data.content}</Text>
        <View>
          <FlatList
            data={data.prices}
            renderItem={(data) => renderSizes(data)}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            horizontal={true}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.advertisment}>
            {props.person.type === "Single"
              ? "Best sizes for single are M and L"
              : "Best sizes for married are L and XL"}
          </Text>
          <Text style={styles.discount}>
            If you add 2 pizzas of same size, you will get 30% descount
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        {size && (
          <Button
            name={"ADD"}
            style={styles.button}
            styleText={{ color: "black", fontSize: 20 }}
            onPress={() => {
              props.addProduct(data, quantity, size);
              props.navigation.push("Master");
            }}
          />
        )}
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

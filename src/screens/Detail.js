import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import CustomModal from "../components/CustomModal";
import Selector from "../components/Selector";
import { addProductToCart } from "../redux/actions/cart";
import { addToCart } from "../redux/store";
import { ConfirmationContext } from "./ConfirmationScreen";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  pizzaImg: {
    height: 350,
    width: width - 30,
    borderRadius: 40,
  },
  content: {
    fontSize: 20,
    marginTop: 20,
    color: "dimgrey",
  },
  button: {
    backgroundColor: "gainsboro",
    width: width /3,
    height: 60,
    borderRadius: 40,
    bottom: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "center",
    flexDirection:'row'
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
});

const Detail = (props) => {
  const data = props.route.params;
  const person = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  const activateModal = () => setModalVisible(true);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState();
  const [index, setIndex] = useState();
  const [unitaryPrice, setUnitaryPrice] = useState();
  const dispatch = useDispatch();
  const selectorFunc = useRef();

  const selectColor = (item, colorSelected, colorUnselected) => {
    let color = "";
    index === item.index ? (color = colorSelected) : (color = colorUnselected);
    return color;
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
            { backgroundColor: selectColor(data, "black", "white") },
          ]}
          styleText={{
            color: selectColor(data, "white", "black"),
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
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 15 }}>
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
        <Text style={styles.price}>{price.toFixed(2) + "$"}</Text>
      </View>
      <View style={{}}>
        <Text style={styles.content}>{data.content}</Text>
        <View style={{}}>
          <FlatList
            data={data.prices}
            renderItem={(data) => renderSizes(data)}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            horizontal={true}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Button
          name={"Buy"}
          style={styles.button}
          styleText={{ color: "black", fontSize: 20 }}
          onPress={() => {
            if (person.type !== "Married") {
              props.addProduct(data, quantity, size);
              props.navigation.push("Confirmation");
            } else {
              activateModal();
            }
          }}
        />
         <Button
          name={"Add"}
          style={styles.button}
          styleText={{ color: "black", fontSize: 20 }}
          onPress={() => {
            props.addProduct(data, quantity, size);

            props.navigation.pop();

          }}
        />
      </View>
      {person.type === "Married" && modalVisible ? (
        <CustomModal closeModal={closeModal} display={modalVisible} />
      ) : null}
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

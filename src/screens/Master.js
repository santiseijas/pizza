import React, { useState, useRef, useContext } from "react";
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
import Button from "../components/Button";
import { data } from "../data/data";
import CustomModal from "../components/CustomModal";
import { addFilmToCart, addProductToCart } from "../redux/actions/cart";

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
  button: {
    backgroundColor: "gainsboro",
    width: width - 30,
    height: 60,
    borderRadius: 40,
    paddingHorizontal: 15,
    bottom: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
function Master(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  const activateModal = () => setModalVisible(true);
  const filmAdded= props.cart.find(element=>element.film===true)

  console.log(!filmAdded);
  const onAddPress = () => {
    props.addFilm();
    closeModal()
    props.navigation.push("Confirmation");
  };

  const onNotAddPress =()=>{
    closeModal()
    props.navigation.push("Confirmation");
  }

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
    <View style={{ backgroundColor: "#fff", height: height, flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderPizza}
        numColumns={2}
        keyExtractor={data.id}
      />
      <View style={styles.bottom}>
        {props.cart.length > 0 && (
          <Button
            name={"Buy"}
            style={styles.button}
            styleText={{ color: "black", fontSize: 20 }}
            onPress={() => {
              if (props.person.type ==! "Married") {
                props.navigation.push("Confirmation");
              } else {
                if(!filmAdded){
                  activateModal();

                
                }else{
                  props.navigation.push("Confirmation");

                }
               
              }
            }}
          />
        )}
      </View>
      {props.person.type === "Married" && modalVisible ? (
        <CustomModal onAddPress={onAddPress} display={modalVisible}onNotAddPress={onNotAddPress} />
      ) : null}
    </View>
  );
}

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
    addFilm: () => dispatch(addFilmToCart(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Master);

import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CustomModal from "../components/CustomModal";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
   name: {
      fontSize: 25,
      fontWeight: "bold",
      marginTop: 20,
   },
   pizzaImg: {
      height: 350,
      width: width-30,
      borderRadius: 40,
   },
   content: {
      fontSize: 20,
      marginTop: 20,
      color: "dimgrey",
   },
   button: {
      backgroundColor: "gainsboro",
      width: width - 100,
      height: 60,
      borderRadius: 40,
      bottom: 0,
   },
   bottom: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 20,
      alignItems: "center",
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
   buttonSelector: {
      height: 50,
      width: 20,
      marginHorizontal: 15,
      marginBottom: 5,
   },
   quantity: {
      fontSize: 20,
      color: "black",
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
      alignItems:'center',
      marginTop:20
   },
   price:{
      fontSize:40
   }
});

const Detail = (route) => {
   const data = route.route.params;
   const person = useSelector((state) => state);
   const [modalVisible, setModalVisible] = useState(false);
   const closeModal = () => setModalVisible(false);
   const activateModal = () => setModalVisible(true);
   const [amount, setAmount] = useState(1);
   const [price, setPrice]= useState(0)

   const renderSizes = () => {
      return data.prices.map((element) => {
         return (
            <View style={{ marginTop: 20 }}>
               <Button
                  name={element.size}
                  style={[styles.buttonSize, {}]}
                  styleText={{ color: "black", fontSize: 30 }}
                  onPress={() =>setPrice(element.price) }
               />
            </View>
         );
      });
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
            <View style={styles.selector}>
               <Button
                  name={"-"}
                  style={[styles.buttonSelector, {}]}
                  styleText={{ color: "black", fontSize: 40 }}
                  onPress={() => {
                     if (amount === 0) return;
                     setAmount(amount - 1);
                  }}
               />
               <Text style={styles.quantity}>{amount}</Text>
               <Button
                  name={"+"}
                  style={[styles.buttonSelector, {}]}
                  styleText={{ color: "black", fontSize: 40 }}
                  onPress={() => setAmount(amount + 1)}
               />
            </View>
            <Text style={styles.price}>{price+'$'}</Text>
         </View>
         <View style={{}}>
            <Text style={styles.content}>{data.content}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
               {renderSizes()}
            </View>
         </View>
         <View style={styles.bottom}>
            <Button
               name={"Buy"}
               style={styles.button}
               styleText={{ color: "black", fontSize: 20 }}
               onPress={() => activateModal()}
            />
         </View>
         {person.type === "Married" && modalVisible ? (
            <CustomModal closeModal={closeModal} display={modalVisible} />
         ) : null}
      </View>
   );
};
export default Detail;

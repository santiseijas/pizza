import React, { useState,useRef } from "react";
import {
   View,
   Text,
   StyleSheet,
   Image,
   Dimensions,

} from "react-native";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CustomModal from "../components/CustomModal";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
   name: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 20,
   },
   pizzaImg: {
      height: 250,
      width: width,
      borderRadius: 40,
   },
   content: {
      fontSize: 20,
      marginTop: 20,
   },
   button: {
      backgroundColor: "grey",
      width: width - 100,
      height: 60,
      borderRadius: 20,
      bottom: 0,
   },
   bottom: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 20,
      alignItems: "center",
   },
  
});

const Detail = (route) => {
   const data = route.route.params;
   const counter = useSelector((state) => state);
   const [modalVisible, setModalVisible] = useState(false);
   console.log(counter);
   const closeModal = () => setModalVisible(false);
   const activateModal = () => setModalVisible(true);

   return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
         <View
            style={{ alignItems: "center", marginTop: 10, marginHorizontal: 10 }}
         >
            <Text style={styles.name}>{data.name}</Text>
            <Image source={{ uri: data.imageUrl }} style={styles.pizzaImg} />
            <Text style={styles.content}>{data.content}</Text>
         </View>
         <View style={styles.bottom}>
            <Button
               name={"Buy"}
               style={styles.button}
               styleText={{ color: "white", fontSize: 20 }}
               onPress={() => activateModal()}
            />
         </View>
         {counter.type==='Married'&&modalVisible? <CustomModal closeModal={closeModal} display={modalVisible}
        />:null}
       
      </View>
   );
};
export default Detail;

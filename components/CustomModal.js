import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import Button from "./Button";

const CustomModal = (props) => {

   
   return props.display ? (
      <View>
         <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onPress={props.closeModal}
         >
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Text style={styles.textStyle}>
                     Do you want to see one film tonight?
            </Text>
                  <View style={styles.bottom}>
                     <Button
                        name={"Buy"}
                        style={styles.buttonModal}
                        styleText={{ color: "white", fontSize: 20 }}
                        onPress={props.closeModal}
                     />
                  </View>
               </View>
            </View>
         </Modal>
      </View>
   ) : null;
};

export default CustomModal;

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
   },
   modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      height: 300,
      width: 300,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   buttonModal: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      height: 50,
      width: 100,
      backgroundColor: "black",
      justifyContent: "flex-end",
      alignItems: "center",
   },
   textStyle: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
   },
   bottom: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
   },
});

import React from "react";
import { StyleSheet, Text, View, Modal, Image } from "react-native";
import Button from "./Button";

const CustomModal = (props) => {


   return props.display ? (
      <View>
         <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
           
         >
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Text style={styles.textStyle}>
                     Do you want to see one film tonight?
            </Text>
                  <View>
                     <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UY720_.jpg' }} style={styles.filmImg} />
                  </View>
                  <View style={styles.bottom}>
                     <Button
                        name={"Add"}
                        style={[styles.buttonModal, {backgroundColor:'green'}]}
                        styleText={{ color: "white", fontSize: 20 }}
                        onPress={props.onAddPress}
                     />
                      <Button
                        name={"Not Today"}
                        style={[styles.buttonModal, {backgroundColor:'red'}]}
                        styleText={{ color: "white", fontSize: 20 }}
                        onPress={props.onNotAddPress}
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
      height: 350,
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
      width: 120,
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
      alignItems: 'stretch',
      flexDirection:'row',
      
   },
   filmImg: {
      height: 200,
      width: 200,
      borderRadius: 40,
   },
});

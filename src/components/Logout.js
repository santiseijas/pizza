import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
   button: {
      backgroundColor: "transparent",
      width: 60,
      height: 30,
      borderRadius: 20,
      justifyContent: "center",
   },
});

const Logout = (props) => {
   const dispatch = useDispatch();
   const navigation = useNavigation();

   const onLogout = () => {
      dispatch({
         type: '',
      });
      navigation.navigate("Home");
   }
   return (
      <View>
         <Button
            name={"LOGOUT"}
            onPress={() => {
               onLogout()
            }}
            style={styles.button}
         />
      </View>
   );
};

export default Logout;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";
import { connect, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logOut, selectPersonType } from "../redux/actions/person";

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
  const navigation = useNavigation();

  const onLogout = () => {
    props.logOut()
    navigation.reset({
      index: 1,
      routes: [
       
        { name: 'Home' },
      ],
    })
  };
  return (
    <View>
      <Button
        name={"LOGOUT"}
        onPress={() => {
          onLogout();
        }}
        style={styles.button}
      />
    </View>
  );
};

const mapStateToProps = state => {
   return {
     person: state.person
   };
 };
const mapDispatchToProps = dispatch => {
   return {
    selectPerson: (type) => dispatch(selectPersonType(type)),
    logOut:()=>dispatch(logOut())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Logout);

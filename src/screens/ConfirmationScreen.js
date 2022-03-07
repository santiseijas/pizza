import React, {createContext, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";

const ConfirmationScreen = () => {
   const person = useSelector((state) => state);
   console.log(person);
   return (
      <View>
         <Text></Text>
      </View>
   )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from '../../img/logo.png'

const Header = () => {
  return (
    <View>
      <Image source={ Logo } style={styles.pizzaImg} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

   pizzaImg: {
      height: 50,
      width: 100,
   },
});

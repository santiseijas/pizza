import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { connect } from "react-redux";
import { selectPersonType } from "../redux/actions/person";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "gainsboro",
    width: width - 30,
    height: 60,
    borderRadius: 40,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});

function Home(props) {
  function onPress(person) {
    props.selectPerson(person);
    props.navigation.push("Master");
  }

  return (
    <View style={styles.container}>
      <Button
        name={"SINGLE"}
        styleText={{ color: "black", fontSize: 20 }}
        onPress={() => {
          onPress("Single");
        }}
        style={styles.button}
      />
      <Button
        name={"MARRIED"}
        styleText={{ color: "black", fontSize: 20 }}
        onPress={() => {
          onPress("Married");
        }}
        style={styles.button}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    person: state.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectPerson: (type) => dispatch(selectPersonType(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

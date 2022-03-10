import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { connect, useDispatch } from "react-redux";
import { selectPersonType } from "../redux/actions/person";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "grey",
    margin: 20,
    width: 200,
    height: 40,
    padding: 10,
    borderRadius: 20,
  },
});

function Home(props) {
console.log(props);

  function onPress(person) {
    props.selectPerson(person)
    props.navigation.push("Master");
  }


  return (
    <View style={styles.container}>
      {    console.log(props)}
      <Button
        name={"single"}
        onPress={() => {
          onPress("Single");
        }}
        style={styles.button}
      />
      <Button
        name={"married"}
        onPress={() => {
          onPress("Married");
        }}
        style={styles.button}
      />
    </View>
  );
}


const mapStateToProps = state => {
  return {
    person: state.person
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectPerson: type => dispatch(selectPersonType(type))
    //selectPerson: type => dispatch(selectPersonType(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
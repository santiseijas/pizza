import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { personaReducer } from "./src/redux/reducer";
import Master from "./src/screens/Master";
import Detail from "./src/screens/Detail";

const Stack = createNativeStackNavigator();
const store = createStore(personaReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen
            name="Master"
            component={Master}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackVisible: false
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerTitle: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

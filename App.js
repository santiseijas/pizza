import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { personaReducer } from "./redux/reducer";
import Master from "./screens/Master";
import Detail from "./screens/Detail";

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
            options={{ headerTitle: "" ,headerBackVisible:false}}
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

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { Provider } from "react-redux";
import  createStore  from "./src/redux/store";
import Master from "./src/screens/Master";
import Detail from "./src/screens/Detail";
import Header from "./src/components/Header";
import Logout from "./src/components/Logout";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";

const initialState = {
  person: {},
  cart: []
};

const Stack = createNativeStackNavigator();
const store = createStore(initialState)

export default function App() {
  console.disableYellowBox=true
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => <Header {...props} />,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Master"
            component={Master}
            options={{
              headerTitle: (props) => <Header {...props} />,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackVisible: false,
              headerRight: (props) => <Logout {...props} />,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerTitle: (props) => <Header {...props} />,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerRight: (props) => <Logout {...props} />,
            }}
          />
           <Stack.Screen
            name="Confirmation"
            component={ConfirmationScreen}
            options={{
              headerTitle: (props) => <Header {...props} />,
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerRight: (props) => <Logout {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ScreensTab from "../tabs/ScreensTab";
import ShowDetailsScreen from "../screens/ShowDetailsScreen";

//App/AppStack

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreensTab"
          component={ScreensTab}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="ShowDetailsScreen"
          component={ShowDetailsScreen}
          options={{
            headerBackTitle: "Back to List",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleStyle: {
              color: "#000",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

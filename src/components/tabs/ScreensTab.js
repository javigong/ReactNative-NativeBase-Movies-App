import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MoviesScreen from "../screens/MoviesScreen";

//App/AppStack/ScreensTab

const Tab = createMaterialTopTabNavigator();

const ScreensTab = () => {
  return (
    <>
      <Tab.Navigator
        indicatorStyle={{
          backgroundColor: "#2c3e50",
        }}
        screenOptions={{
          tabBarActiveTintColor: "#2c3e50",
          tabBarLabelStyle: { fontSize: 15, textTransform: "capitalize" },
        }}
      >
        <Tab.Screen name="Movies">
          {(props) => <MoviesScreen {...props} currentScreen={"movies"} />}
        </Tab.Screen>

        <Tab.Screen name="Search Results">
          {(props) => <MoviesScreen {...props} currentScreen={"search"} />}
        </Tab.Screen>

        <Tab.Screen name="TV Shows">
          {(props) => <MoviesScreen {...props} currentScreen={"tv"} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default ScreensTab;

import React from "react";

import MoviesContainer from "../containers/MoviesContainer";

//App/AppStack/ScreensTab/MoviesScreen

const MoviesScreen = ({ navigation, currentScreen }) => {
  return (
    <MoviesContainer navigation={navigation} currentScreen={currentScreen} />
  );
};

export default MoviesScreen;

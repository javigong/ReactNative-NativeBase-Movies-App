import React from "react";
import { FlatList } from "native-base";

import MovieCard from "../listItems/MovieCard.js";

//App/AppStack/ScreensTab/MoviesScreen/MoviesContainer/MoviesList

const MoviesList = ({ navigation, movies, currentScreen }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          navigation={navigation}
          item={item}
          currentScreen={currentScreen !== "search" ? currentScreen : item.media_type}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MoviesList;

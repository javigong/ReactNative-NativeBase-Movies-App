import React, { useEffect, useState } from "react";
import { Box, Center, Heading, Text, VStack, Image } from "native-base";

import { getMoreDetails } from "../services/api";

//App/AppStack/ScreensTab/MoviesScreen/MoviesContainer/MoviesList/MovieCard/ShowDetailsScreen

const ShowDetailsScreen = ({ navigation, route }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    getMoreDetails(route.params.mediaType, route.params.id).then((response) => {
      setDetails(response);
      console.log(route.params.mediaType)
      console.log(route.params.id)
      console.log(response);
      navigation.setOptions({
        title: response.title,
      });
    });
  }, []);

  return (
    <Box>
      <VStack>
        <Center>
          <Image
            alt={`${details.title}`}
            size={"2xl"}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${details.poster}`,
            }}
          />
        </Center>
        <Box>
          <VStack>
            <Heading>{details.title}</Heading>
            <Text>{details.overview}</Text>
            <Text>
              Popularity: {details.popularity} | Release Date: {details.release}
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ShowDetailsScreen;

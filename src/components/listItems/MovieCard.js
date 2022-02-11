import React from "react";
import {
  Box,
  VStack,
  Center,
  Image,
  Heading,
  Text,
  Button,
  HStack,
} from "native-base";

//App/AppStack/ScreensTab/MoviesScreen/MoviesContainer/MoviesList/MovieCard

const MovieCard = ({ navigation, item, currentScreen }) => {
  return (
    <Box>
      <HStack space={3} my="2">
        <Box>
          <Center>
            <Image
              alt={`${item.original_title} ? ${item.original_title} : ${item.original_name}`}
              size={"xl"}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
            />
          </Center>
        </Box>
        <Box width="55%">
          <VStack mb="4">
            <Heading size="sm">
              {item.original_title ? item.original_title : item.original_name}
            </Heading>
            <Text>Popularity: {item.popularity}</Text>
            <Text>
              Release Date:{" "}
              {item.release_date ? item.release_date : item.first_air_date}
            </Text>
            <Button
              onPress={() =>
                navigation.navigate("ShowDetailsScreen", {
                  mediaType: currentScreen,
                  id: item.id,
                })
              }
            >
              More Details
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default MovieCard;

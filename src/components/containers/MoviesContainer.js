import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  HStack,
  Icon,
  Input,
  Select,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { getMovies, getTVShows, getSearchResults } from "../services/api";
import MoviesList from "../lists/MoviesList";
import Loading from "../layout/Loading";

//App/AppStack/ScreensTab/MoviesScreen/MoviesContainer

const MoviesContainer = ({ navigation, currentScreen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([{}]);
  const [filterType, setFilterType] = useState("popular");

  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("multi");

  useEffect(() => {
    if (currentScreen === "movies") {
      setMovies(null);
      setIsLoading(true);
      getMovies(filterType).then((moviesResponse) => {
        setMovies(moviesResponse);
        // console.log(moviesResponse);
      });
      setIsLoading(false);
    } else if (currentScreen === "tv") {
      setMovies(null);
      setIsLoading(true);
      getTVShows(filterType).then((moviesResponse) => {
        setMovies(moviesResponse);
        // console.log(moviesResponse);
      });
      setIsLoading(false);
    }
  }, [filterType]);

  const onSubmit = () => {
    setIsLoading(true);
    getSearchResults(searchType, searchValue).then((moviesResponse) => {
      setMovies(moviesResponse);
    }),
      (error) => {
        console.log("onRejected function called: " + error.message);
      };
    setIsLoading(false);
  };

  return (
    <Container>
      <Center>
        <Box mx={5} my={3}>
          {currentScreen === "movies" && (
            <Center>
              <Select
                selectedValue={filterType}
                onValueChange={(value) => setFilterType(value)}
                width="65%"
              >
                <Select.Item label={"now_playing"} value={"now_playing"} />
                <Select.Item label={"popular"} value={"popular"} />
                <Select.Item label={"top_rated"} value={"top_rated"} />
                <Select.Item label={"upcoming"} value={"upcoming"} />
              </Select>
            </Center>
          )}

          {currentScreen === "tv" && (
            <Center>
              <Select
                selectedValue={filterType}
                onValueChange={(value) => setFilterType(value)}
                width="65%"
              >
                <Select.Item label={"airing_today"} value={"airing_today"} />
                <Select.Item label={"on_the_air"} value={"on_the_air"} />
                <Select.Item label={"popular"} value={"popular"} />
                <Select.Item label={"top_rated"} value={"top_rated"} />
              </Select>
            </Center>
          )}

          {currentScreen === "search" && (
            <VStack space={2} width="100%" py={5}>
              <FormControl isRequired>
                <VStack width="100%" space={2}>
                  <FormControl.Label fontSize="sm">
                    Search Movie/TV Show Name
                  </FormControl.Label>
                  <Input
                    placeholder="i.e. James Bond, CSI"
                    px={3}
                    width="100%"
                    InputLeftElement={
                      <Icon
                        size={4}
                        ml={3}
                        as={<Ionicons name="ios-search" />}
                      />
                    }
                    onChangeText={(value) => {
                      setSearchValue(value);
                    }}
                  />
                  <FormControl.Label fontSize="sm">
                    Choose Search Type
                  </FormControl.Label>
                  <HStack width="100%" space={2}>
                    <Box width="75%">
                      <Select
                        width="90%"
                        style={{ borderWidth: 1 }}
                        selectedValue={searchType}
                        onValueChange={(value) => setSearchType(value)}
                      >
                        <Select.Item label={"movie"} value={"movie"} />
                        <Select.Item label={"multi"} value={"multi"} />
                        <Select.Item label={"tv"} value={"tv"} />
                      </Select>
                    </Box>
                    <Button
                      width="45%"
                      onPress={onSubmit}
                      startIcon={<Icon as={Ionicons} name="ios-search" />}
                    >
                      Search
                    </Button>
                  </HStack>
                  <FormControl.HelperText _text={{ fontSize: "xs" }}>
                    Please select a search type
                  </FormControl.HelperText>
                </VStack>
              </FormControl>
            </VStack>
          )}

          {isLoading ? (
            <Loading />
          ) : (
            <MoviesList
              navigation={navigation}
              movies={movies}
              currentScreen={currentScreen}
            />
          )}
        </Box>
      </Center>
    </Container>
  );
};

export default MoviesContainer;

import axios from "axios";
import { API_KEY, BASE_URL } from "../config/api_config";

// get request invoked at MoviesContainer.js
// sample: https://api.themoviedb.org/3/movie/popular?api_key=5bb91b8a51bd00c15842c4a99201896d&language=en-CA&page=1

export const getMovies = async (filterType) => {
  configurationObject = {
    method: "get",
    url: `${BASE_URL}/movie/${filterType}?api_key=${API_KEY}&language=en-CA&page=1`,
  };

  try {
    const response = await axios(configurationObject);
    // console.log(response.data.results);
    const results = response.data.results;
    return results;
  } catch (error) {
    throw error;
  }
};

// get request invoked at MoviesContainer.js
// sample: https://api.themoviedb.org/3/tv/popular?api_key=5bb91b8a51bd00c15842c4a99201896d&language=en-CA&page=1

export const getTVShows = async (filterType) => {
  configurationObject = {
    method: "get",
    url: `${BASE_URL}/tv/${filterType}?api_key=${API_KEY}&language=en-CA&page=1`,
  };

  try {
    const response = await axios(configurationObject);
    // console.log(response.data.results);
    const results = response.data.results;
    return results;
  } catch (error) {
    throw error;
  }
};

// get request invoked at MoviesContainer.js
// sample https://api.themoviedb.org/3/search/multi?api_key=5bb91b8a51bd00c15842c4a99201896d&language=en-CA&page=1&query=spiderman

export const getSearchResults = async (searchType, searchValue) => {
  configurationObject = {
    method: "get",
    url: `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&language=en-CA&page=1&query=${searchValue}`,
  };

  try {
    const response = await axios(configurationObject);
    // console.log(response.data.results);
    const results = response.data.results;
    return results;
  } catch (error) {
    throw error;
  }
};

// get request invoked at ShowScreen.js
// sample https://api.themoviedb.org/3/movie/634649?api_key=5bb91b8a51bd00c15842c4a99201896d&language=en-CA&page=1

export const getMoreDetails = async (mediaType, id) => {
  configurationObject = {
    method: "get",
    url: `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US&page=1`,
  };

    try {
      const response = await axios(configurationObject);
      const results = response.data;
      // console.log(results);
      return {
        title: results.original_name
          ? results.original_name
          : results.original_title,
        poster: results.poster_path,
        overview: results.overview,
        popularity: results.popularity,
        release: results.release_date
          ? results.release_date
          : results.first_air_date,
      };
    } catch (error) {
      throw error;
    }

};

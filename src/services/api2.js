import axios from "axios";

const API_KEY = "caa05dd01affd2392f152eaf8a60c0b1";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWEwNWRkMDFhZmZkMjM5MmYxNTJlYWY4YTYwYzBiMSIsIm5iZiI6MTcyMzc1MjMwNi41MTE2MDQsInN1YiI6IjY2YmU1ZDVmMGMzYzFjMjNiYzljYTA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QnumZqfBDrJGACggdw-K7trF_lwboxd8WYiX1Ykh8FA",
  },
};

export const requestFilmDetails = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
    headers: options.headers,
  });
  return data;
};

export const requestByActors = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
    headers: options.headers,
  });
  return data;
};

export const requestByReviews = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
    headers: options.headers,
  });
  return data;
};

export const requestBySearchFilms = async (queryValue) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: queryValue,
    },
    headers: options.headers,
  });
  return data;
};

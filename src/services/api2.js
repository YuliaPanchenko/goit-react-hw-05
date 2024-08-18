import axios from "axios";

const API_KEY = "caa05dd01affd2392f152eaf8a60c0b1";
const BASE_URL = "https://api.themoviedb.org/3";

export const requestFilmDetails = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const requestByActors = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const requestByReviews = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

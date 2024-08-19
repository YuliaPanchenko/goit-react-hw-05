import axios from "axios";

const API_KEY = "caa05dd01affd2392f152eaf8a60c0b1";

const BASE_URL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWEwNWRkMDFhZmZkMjM5MmYxNTJlYWY4YTYwYzBiMSIsIm5iZiI6MTcyMzc1MjMwNi41MTE2MDQsInN1YiI6IjY2YmU1ZDVmMGMzYzFjMjNiYzljYTA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QnumZqfBDrJGACggdw-K7trF_lwboxd8WYiX1Ykh8FA",
  },
};

export const requestAllFilms = async () => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      api_key: API_KEY,
    },
    headers: options.headers,
  });
  return data.results;
};

import css from "../HomePage/HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { requestAllFilms } from "/src/services/api.js";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setIsLoading(true);
        const data = await requestAllFilms();
        setFilms(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms();
  }, []);
  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      {isLoading && <Loader />}
      <MovieList films={films} />
    </>
  );
};

export default HomePage;

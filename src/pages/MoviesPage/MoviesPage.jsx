import { useSearchParams } from "react-router-dom";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar";
import { requestBySearchFilms } from "../../services/api2";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const queryValue = searchParams.get("query");
  console.log(queryValue);

  useEffect(() => {
    if (queryValue === null) return;
    const fetchFilmsBySearchValue = async () => {
      try {
        setIsLoading(true);

        const data = await requestBySearchFilms(queryValue);
        setFilms(data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmsBySearchValue();
  }, [queryValue]);

  const onSubmit = (film) => {
    setSearchParams({
      query: film,
    });
    setFilms([]);
    // setPage(1);
  };

  return (
    <>
      <MovieSearchBar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      <MovieList films={films} />
    </>
  );
};

export default MoviesPage;

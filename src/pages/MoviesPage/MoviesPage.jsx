import { Link, useSearchParams } from "react-router-dom";
import MovieSearchBar from "../../components/MovieSearchBar/MovieSearchBar";
import { requestBySearchFilms } from "../../services/api2";
import css from "../MoviesPage/MoviesPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("query");
  console.log(queryValue);

  useEffect(() => {
    if (queryValue === null) return;
    const fetchFilmsBySearchValue = async () => {
      try {
        const data = await requestBySearchFilms(queryValue);
        setFilms(data.results);
      } catch (err) {
        console.log(err.message);

        // } finally {
        //   setIsLoading(false);
        // }
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
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location.pathname }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;

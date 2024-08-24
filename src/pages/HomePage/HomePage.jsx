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
      <ul className={css.filmsList}>
        {films.map((film) => {
          return (
            <li className={css.filmItem} key={film.id}>
              {isLoading && <Loader />}
              <MovieList id={film.id} title={film.title} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomePage;

//  return (
//    <ul className={css.filmsList}>
//      {films.map((film) => {
//        return (
//          <li
//            className={css.filmItem}
//            key={film.id}

//            // onClick={() => onImageClick(film)}
//          >
//            <MovieDetailsPage
//              url={film.backdrop_path}
//              title={film.title}
//              score={film.vote_average}
//              overview={film.overview}
//              genres={film.genre_ids}
//            />
//          </li>
//        );
//      })}
//    </ul>
//  );

{
  /* <Link> to={`/movies/${film.id}`} </Link> */
}

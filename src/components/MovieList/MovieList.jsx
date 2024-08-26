import { Link, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <div className={css.linkWrap}>
      <ul className={css.filmsList}>
        {films.map((film) => {
          return (
            <li className={css.filmItem} key={film.id}>
              <Link
                className={css.link}
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;

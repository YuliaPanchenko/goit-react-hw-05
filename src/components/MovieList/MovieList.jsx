import { Link } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

const MovieList = ({ id, title }) => {
  return (
    <div className={css.linkWrap}>
      <Link
        className={css.link}
        to={`/movies/${id}`}
        state={{ from: location.pathname }}
      >
        {title}
      </Link>
    </div>
  );
};

export default MovieList;

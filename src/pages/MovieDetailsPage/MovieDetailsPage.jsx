import MovieCast from "/src/components/MovieCast/MovieCast";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { requestFilmDetails } from "../../services/api2";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [filmDetails, setFilmDetails] = useState([]);
  const location = useLocation();
  console.log(location);
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const fechFilmDetails = async () => {
      try {
        const data = await requestFilmDetails(movieId);
        setFilmDetails(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fechFilmDetails();
  }, [movieId]);

  return (
    <div className={css.filmWrap}>
      <Link to={backLink.current}>Go back</Link>
      <div className={css.filmDescription}>
        <img
          className={css.film}
          src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`}
          alt={filmDetails.title}
        />
        <div className={css.filmInfoWrapper}>
          <h2 className={css.filmTitle}>
            {filmDetails.title} ({filmDetails.release_date?.substring(0, 4)})
          </h2>
          <p className={css.userScore}>
            User Score: {Math.round(filmDetails.vote_average * 10)}%
          </p>
          <h3 className={css.filmOwerview}>Overview</h3>
          <p className={css.filmOwText}>{filmDetails.overview}</p>
          <h4 className={css.filmGenres}>Genres</h4>
          <p className={css.filmGenresText}>
            {filmDetails.genres?.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <ul className={css.filmInfo}>
        Additional information
        <li className={css.filmItem}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.filmItem}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

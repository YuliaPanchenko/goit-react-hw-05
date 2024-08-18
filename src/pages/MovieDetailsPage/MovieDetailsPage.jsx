import MovieCast from "/src/components/MovieCast/MovieCast";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { requestFilmDetails } from "../../services/api2";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [filmDetails, setFilmDetails] = useState([]);

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
    <div>
      <div className={css.filmDescription}>
        <img
          className={css.film}
          src={`https://image.tmdb.org/t/p/w500/${filmDetails.backdrop_path}`}
          alt={filmDetails.title}
        />
        <h2 className={css.filmTitle}>{filmDetails.title}</h2>
        <h3 className={css.filmOwerview}>Owerview</h3>
        <p className={css.filmOwText}> {filmDetails.overview}</p>
        <h4 className={css.filmGenres}>Genres</h4>
        {/* <p className={css.filmGenresText}>
          {filmDetails.genres.map((genre) => genre.name).join(", ")}
        </p> */}
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

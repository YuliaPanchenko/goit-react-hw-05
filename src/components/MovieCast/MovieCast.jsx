import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestByActors } from "../../services/api2";
import css from "../MovieCast/MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const data = await requestByActors(movieId);
        setActors(data.cast);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (movieId) {
      fetchActors();
    }
  }, [movieId]);

  return (
    <div className={css.castList}>
      {actors.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <ul>
          {actors.map((actor) => (
            <li key={actor.id} className={css.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={css.actorPhoto}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;

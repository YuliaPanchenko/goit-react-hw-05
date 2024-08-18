import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestByReviews } from "../../services/api2";
import css from "../MovieReviews/MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await requestByReviews(movieId);
        setReviews(data.results);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  return (
    <div className={css.reviews}>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.reviewAuthor}>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;

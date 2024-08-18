import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviewіs from "../src/components/MovieReviews/MovieReviews";
// import NotFoundPage from "../src/pages/NotFoundPage";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviewіs />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
}

export default App;

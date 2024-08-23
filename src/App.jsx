import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
// import Navigation from "./components/Navigation/Navigation";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import HomePage from "./pages/HomePage/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviewіs from "../src/components/MovieReviews/MovieReviews";
// import NotFoundPage from "../src/pages/NotFoundPage";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviewіs = lazy(() =>
  import("../src/components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() =>
  import("../src/pages/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviewіs />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

import { Link, NavLink, Route, Routes } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";
import HomePage from "/src/pages/HomePage/HomePage";
import MoviesPage from "/src/pages/MoviesPage/MoviesPage";

const Navigation = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
    </>
  );
};

export default Navigation;

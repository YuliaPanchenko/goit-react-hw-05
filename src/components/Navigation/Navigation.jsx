import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

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
    </>
  );
};

export default Navigation;

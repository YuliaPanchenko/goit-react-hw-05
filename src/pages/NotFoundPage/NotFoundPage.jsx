import { Link } from "react-router-dom";
import css from "../NotFoundPage/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={css.homeLink}>
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;

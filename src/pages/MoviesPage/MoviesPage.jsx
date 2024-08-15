import css from "../MoviesPage/MoviesPage.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Please enter search term!");

const MoviesPage = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const film = form.elements.film.value;

    if (form.elements.film.value.trim() === "") {
      notify();
      return;
    }
    console.log(film);

    onSubmit(film);
    form.reset();
  };

  return (
    <header className={css.formHeader}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="film"
          autoComplete="off"
          autoFocus
          placeholder="Search your film"
        />
        <button className={css.formBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default MoviesPage;

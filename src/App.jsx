import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import { requestAllFilms } from "./services/api";

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await requestAllFilms();
        setFilms(data);
      } catch (err) {
        console.log(err.message);

        // } finally {
        //   setIsLoading(false);
        // }
      }
    };

    fetchFilms();
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;

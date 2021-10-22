import { useState, useEffect } from "react";
import MoviePagination from "../MoviePagination";
import MovieCard from "../MovieCard";
import MovieLayout from "../../layouts/Movie";
import { API_URL } from "../../../config"

const MovieArchives = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/movies?archive=true`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);
  return (
    <MovieLayout>
      <section className="section-long">
        <div className="container">
          {movies.map((item) => {
            return <MovieCard item={item} key={item._id} />;
          })}
          <MoviePagination />
        </div>
      </section>
    </MovieLayout>
  );
};

export default MovieArchives;

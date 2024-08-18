import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch directors');
        }
        return response.json();
      })
      .then(data => setDirectors(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => (
          <article key={director.id}> 
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={`${director.name}-${index}`}>{movie.title}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
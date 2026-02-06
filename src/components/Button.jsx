import { useState } from "react";

export default function Button({ text }) {
  const [favotrites, setFavorites] = useState([]);

  function toggleFavorite(movie) {
    if (favotrites.some((m) => m.id === movie.id)) {
      setFavorites(favotrites.filter((m) => m.id !== movie.id));
    } else {
      setFavorites([...favotrites, movie]);
    }
  }
  return <button onClick={() => toggleFavorite()}>{text}</button>;
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data);
    setData(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={data.large_cover_image}></img>
          <h2>{data.title_long}</h2>
          <ul>
            {data.genres.map((g) => (
              <li>{g}</li>
            ))}
          </ul>
          <p>{data.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

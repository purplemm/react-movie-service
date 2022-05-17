import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovie();
    }, []);

    console.log(movie);

    return (
        <div>
            {loading 
                ? <h1>Loading...</h1> 
                : <div>
                    <h1>Title: {movie.title}</h1>
                    <p>Description: {movie.description_intro}</p>
                    <img src={movie.large_cover_image}/>
                </div>}
        </div>
    );
}

export default Detail;
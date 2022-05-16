import PropTypes from "prop-types";

function Movie({thumbImg, title, summary, genres}){
    return (
        <li>
            <img src={thumbImg} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </li>
    );
}

Movie.propTypes = {
    thumbImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
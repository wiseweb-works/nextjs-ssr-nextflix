const API_KEY = process.env.TMDB_KEY;
const TMDB_URL = 'https://api.themoviedb.org/3/movie';

export const getMovies = async (type) => {
  try {
    const res = await fetch(`${TMDB_URL}/${type}?api_key=${API_KEY}`);

    const { results } = await res.json();

    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const res = await fetch(`${TMDB_URL}/${movieId}?api_key=${API_KEY}`);

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getYoutube = async (movieId) => {
  try {
    const res = await fetch(`${TMDB_URL}/${movieId}/videos?api_key=${API_KEY}`);

    const { results } = await res.json();

    return results[0]?.key;
  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    throw error;
  }
};

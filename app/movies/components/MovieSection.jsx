import { getMovies } from '@/helpers/movieHelpers';
import MovieCard from './MovieCard';

const MovieSection = async ({ type }) => {
  const movies = await getMovies(type);

  return (
    <div className="m-4 ">
      <p className="text-[#ff4b45] text-md md:text-xl lg:text-2xl font-semibold mb-4 ">
        {' '}
        {type.toUpperCase()}
      </p>

      <div className="grid grid-flow-col gap-2 overflow-scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;

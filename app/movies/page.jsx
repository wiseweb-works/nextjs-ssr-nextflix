import { getMovies } from '@/helpers/movieHelpers';
import { HeroSection, MovieSection } from './components';

export const metadata = {
  title: 'Movies Page',
};

const Movies = async () => {
  const movies = await getMovies('now_playing');

  return (
    <div className="bg-black/90">
      <HeroSection
        title={movies[0]?.title}
        overview={movies[0]?.overview}
        id={movies[0]?.id}
      />
      {['now_playing', 'popular', 'top_rated', 'upcoming'].map((type) => (
        <MovieSection type={type} key={type} />
      ))}
    </div>
  );
};

export default Movies;

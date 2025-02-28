'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MovieCard = ({ vote_average, poster_path, id }) => {
  const router = useRouter();

  return (
    <div
      className="w-40 h-[240px] relative cursor-pointer"
      onClick={() => router.push('/movies/' + id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          router.push('/movies/' + id);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Image
        width={160}
        height={240}
        className="rounded-2xl"
        src={'https://image.tmdb.org/t/p/w1280' + poster_path}
        alt=""
      />

      <span
        className={`
    absolute
    top-1 left-1
    text-white font-semibold
    text-xs md:text-sm
    px-3 py-1
    rounded-full
    z-10
    drop-shadow-lg
    ${
      vote_average < 7
        ? 'bg-gradient-to-r from-red-500 to-yellow-500'
        : vote_average >= 7 && vote_average < 8.5
        ? 'bg-gradient-to-r from-yellow-500 to-green-500'
        : 'bg-gradient-to-r from-green-500 to-blue-500'
    }
  `}
      >
        {vote_average.toFixed(1)}
      </span>
    </div>
  );
};

export default MovieCard;

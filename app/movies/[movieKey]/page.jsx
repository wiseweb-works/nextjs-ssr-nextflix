import Link from 'next/link';
import VideoSection from '../components/VideoSection';
import { getMovieDetails, getYoutube } from '@/helpers/movieHelpers';

const MovieDetail = async ({ params }) => {
  const { movieKey } = await params;
  const detail = await getMovieDetails(movieKey);
  const videoKey = await getYoutube(movieKey);

  return (
    <div className="w-[100dvw] h-[100dvh] bg-black flex justify-center">
      <div className="w-[50dvw] h-[50dvh] mt-[20dvh]">
        <h1 className="text-center text-white text-3xl">{detail.title} </h1>
        <p className="text-center text-white text-xl">{detail.tagline} </p>

        <VideoSection videoKey={videoKey} />

        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <Link
            className="bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs
          lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition mt-2"
            href="/movies"
          >
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

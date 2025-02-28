import { getYoutube } from '@/helpers/movieHelpers';
import VideoSection from './VideoSection';

const HeroSection = async ({ title, id, overview }) => {
  const videoKey = await getYoutube(id);

  return (
    <div className="relative h-[100dvh] w-full">
      <VideoSection videoKey={videoKey} />
      <div
        className="absolute top-[70%] left-1/2 bg-black/50 transform -translate-x-1/2
      w-full md:w-1/2 lg:w-1/3 p-6 hover:bg-black/90 transition-all duration-1000"
      >
        <p
          className="text-white text-2xl md:text-4xl lg:text-5xl font-bold
        drop-shadow-lg leading-snug text-center"
        >
          {title}
        </p>

        <p
          className="text-white text-sm md:text-base lg:text-lg mt-4 md:mt-6
        leading-relaxed drop-shadow-lg text-center"
        >
          {overview}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

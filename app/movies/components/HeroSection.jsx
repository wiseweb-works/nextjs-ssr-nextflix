import { getYoutube } from '@/helpers/movieHelpers';
import VideoSection from './VideoSection';

const HeroSection = async ({ title, id, overview }) => {
  const videoKey = await getYoutube(id);

  return (
    <div className="relative h-[50vw]">
      <VideoSection videoKey={videoKey} />
      <div className="absolute top-[30%] left-4 md:left-16 bg-black/90 w-1/3 p-6">
        <p
          className="text-white text-2xl md:text-4xl lg:text-5xl
        font-bold drop-shadow-lg leading-snug"
        >
          {title}
        </p>

        <p
          className="text-white text-sm md:text-base lg:text-lg mt-4
        md:mt-6 leading-relaxed drop-shadow-lg"
        >
          {overview}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

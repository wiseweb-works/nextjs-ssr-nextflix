import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="relative top-2/4 m-auto text-white text-center">
          <h1 className="text-5xl font-extrabold mb-3">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl font-light">Watch anywhere. Cancel anytime.</p>

          <Link href="/register">
            <button
              className="mt-6 w-[250px] bg-red-600 hover:bg-red-700 
            text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

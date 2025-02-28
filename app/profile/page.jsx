'use client';

import { useAuthContext } from '@/context/AuthContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const router = useRouter();
  const { currentUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center pt-20 bg-black/90 h-dvh">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who&apos;s watching?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          {['blue', 'red', 'slate', 'green'].map((item, index) => (
            <div
              role="button"
              tabIndex={0}
              onClick={() => router.push('/movies')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  router.push('/movies');
                }
              }}
              className="w-44 mx-auto cursor-pointer group"
              key={index}
            >
              <div
                className="w-44 h-44 rounded-md flex items-center justify-center overflow-hidden 
              border-transparent group-hover:cursor-pointer group-hover:border-white border-2"
              >
                <Image
                  draggable={false}
                  src={`/images/default-${item}.png`}
                  alt="Profile Images"
                  width={320}
                  height={320}
                />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {index === 0 && currentUser
                  ? currentUser.displayName
                  : `Guest-${index + 1}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

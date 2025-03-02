'use client';

import { useAuthContext } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const { signIn, signUpProvider } = useAuthContext();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { email, password } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn(email, password);
  };

  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
      <div className="bg-black/50 w-full h-full">
        <div className="flex justify-center w-full h-full">
          <div
            className="bg-black/90 px-16 py-16 self-center relative
          lg:w-2/5 lg:max-w-md rounded-md w-full"
          >
            <form onSubmit={handleSubmit} data-test="login-form">
              <h2 className="text-red-600 text-2xl font-medium text-center tracking-[0.1em] mb-3">
                Sign In
              </h2>

              {['Email', 'Password'].map((label) => {
                const id = label.toLowerCase();
                return (
                  <div key={id} className="relative z-0 w-full mb-6 group">
                    <input
                      data-test={id + '-area'}
                      id={id}
                      name={id}
                      type={id}
                      className="peer border-b-2 border-gray-300 text-white 
                      focus:border-red-500 outline-none w-full p-2"
                      placeholder=" "
                      required
                      onChange={handleChange}
                    />
                    <label
                      htmlFor={id}
                      className="absolute left-2 -top-3 text-gray-400 peer-placeholder-shown:top-2 
                      peer-placeholder-shown:text-gray-600 peer-focus:-top-5 peer-focus:text-red-500
                      transition-all"
                    >
                      {label}
                    </label>
                  </div>
                );
              })}

              <button
                data-test="submit-button"
                className="bg-red-600 hover:bg-red-700 text-white
                font-bold py-2 px-4 rounded w-full"
                type="submit"
              >
                Login
              </button>

              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4
                rounded w-full flex items-center justify-center gap-2 mt-3"
                type="button"
                onClick={signUpProvider}
              >
                <span>Continue with Google</span>
              </button>
              <p className="text-gray-400 mt-4 text-center">
                Don&apos;t have any account?{' '}
                <Link
                  href="/register"
                  className="text-red-500 hover:underline"
                  data-test="create-an-account"
                >
                  Create an Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

'use client';

import { useAuthContext } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
  const { createUser, signUpProvider } = useAuthContext();

  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  const { email, password, firstName, lastName } = registerInfo;

  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();

    createUser(email, password, displayName);
  };

  const inputFields = [
    { name: 'firstName', type: 'text', label: 'First Name' },
    { name: 'lastName', type: 'text', label: 'Last Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
  ];

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
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-600 text-2xl font-medium text-center tracking-[0.1em] mb-3">
                Sign Up
              </h2>
              {inputFields.map((field, index) => (
                <div key={index} className="relative z-0 w-full mb-6 group">
                  <input
                    name={field.name}
                    className="peer border-b-2 border-gray-300 text-white focus:border-red-500
                    outline-none w-full p-2"
                    type={field.type}
                    required
                    placeholder=" "
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute left-2 -top-3 text-gray-400 peer-placeholder-shown:top-2
                    peer-placeholder-shown:text-gray-600 peer-focus:-top-5 peer-focus:text-red-500
                    transition-all"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold
                py-2 px-4 rounded w-full"
                type="submit"
              >
                Register
              </button>

              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold
                py-2 px-4 rounded w-full flex items-center justify-center gap-2 mt-3"
                type="button"
                onClick={signUpProvider}
              >
                <span>Continue with Google</span>
              </button>
              <p className="text-gray-400 mt-4 text-center">
                Already have an account?{' '}
                <Link href="/login" className="text-red-500 hover:underline">
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

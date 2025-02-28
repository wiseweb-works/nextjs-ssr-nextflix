'use client';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/auth/firebase';
import { useRouter } from 'next/navigation';
import { ToastNotify } from '@/helpers/ToastNotify';

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      ToastNotify('success', 'Registered successfully!');
      router.push('/profile');
    } catch (err) {
      ToastNotify('error', err.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      ToastNotify('success', 'Logged in successfully!');
      router.push('/profile');
    } catch (err) {
      ToastNotify('error', err.message);
    }
  };

  const logOut = () => {
    signOut(auth);
    ToastNotify('success', 'Logged out successfully!');
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          'user',
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };

  const signUpProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        ToastNotify('success', 'Logged in successfully!');
        router.push('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const values = {
    currentUser,
    createUser,
    signIn,
    logOut,
    signUpProvider,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

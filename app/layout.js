import { ToastContainer } from 'react-toastify';
import './globals.css';
import Navbar from '@/components/Navbar';
import AuthContextProvider from '@/context/AuthContext';

export const metadata = {
  title: 'NextJS Netflix APP',
  description: 'A NextJS based Netflix Clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
}

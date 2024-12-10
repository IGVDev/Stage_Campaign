import { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-whitesmoke">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/">
          <a className="text-[#865CF7] hover:text-[#5435AA] underline">
            Return to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

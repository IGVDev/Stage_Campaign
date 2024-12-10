import { NextPage } from 'next';
import { ErrorProps } from 'next/error';

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-whitesmoke">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        <p className="text-lg">
          Please try refreshing the page or contact support if the problem persists.
        </p>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

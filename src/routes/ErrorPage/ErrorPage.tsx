import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  let message = 'An unexpected error occurred.';
  if (isRouteErrorResponse(error)) {
    message = error.statusText || error.data;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Something went wrong</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;

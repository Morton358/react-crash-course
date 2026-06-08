import type { LoaderFunctionArgs } from 'react-router-dom';

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error('Post ID is missing in the URL parameters.');
  }
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post details (${response.status}: ${response.statusText})`);
  }
  const data = await response.json();
  if (!data.post) {
    throw new Error('Post not found.');
  }
  return data.post;
}

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  if (!response.ok) {
    throw new Error(`Failed to fetch posts (${response.status}: ${response.statusText})`);
  }
  const data = await response.json();
  return data.posts;
}

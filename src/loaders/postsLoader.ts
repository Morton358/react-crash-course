export async function loader() {
  try {
    const response = await fetch('http://localhost:8080/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

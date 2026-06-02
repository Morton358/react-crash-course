import Post from '../../components/Post/Post';
import classes from './Posts.module.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Posts = () => {
  const [postsData, setPostsData] = useState<{ name: string; text: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/posts', { signal: controller.signal });
        const data = await response.json();
        setPostsData(data.posts);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return;
        console.error('Failed to fetch posts:', error);
        setLoading(false);
      }
    };

    loadPosts();

    return () => controller.abort();
  }, []);

  const addPostHandler = (post: { name: string; text: string }) => {
    setPostsData((prev) => [post, ...prev]);
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
  };

  return (
    <>
      <main>
        <Outlet context={{ onAddPost: addPostHandler }} />
        {loading && <h3 className={classes.loading}>Loading...</h3>}
        {!loading && postsData.length === 0 && <h3 className={classes['no-posts']}>No posts added yet.</h3>}
        {!loading && postsData.length > 0 && (
          <ul className={classes.posts}>
            {postsData.map((post, index) => (
              <Post key={index} author={post.name} body={post.text} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Posts;

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

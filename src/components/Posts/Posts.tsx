import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import classes from './Posts.module.css';
import Modal from '../Modal/Modal';
import { useEffect, useState } from 'react';

const Posts = ({ isNewPostVisible, onCloseNewPost }: { isNewPostVisible: boolean; onCloseNewPost: () => void }) => {
  const [postsData, setPostsData] = useState<{ name: string; text: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:8080/posts', {
        signal: controller.signal,
      });
      const data = await response.json();
      setPostsData(data.posts);
      setLoading(false);
    };
    fetchPosts();

    return () => controller.abort();
  }, []);

  const addPostHandler = (post: { name: string; text: string }) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    setPostsData((existingPosts) => [post, ...existingPosts]);
  };

  let modalContent = null;
  if (isNewPostVisible) {
    modalContent = (
      <Modal onClose={onCloseNewPost}>
        <NewPost onAddPost={addPostHandler} onClose={onCloseNewPost} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      {!loading && postsData.length === 0 && <h3 className={classes['no-posts']}>No posts added yet.</h3>}
      {!loading && postsData.length > 0 && (
        <ul className={classes.posts}>
          {postsData.map((post, index) => (
            <Post key={index} author={post.name} body={post.text} />
          ))}
        </ul>
      )}
      {loading && <h3 className={classes.loading}>Loading...</h3>}
    </>
  );
};

export default Posts;

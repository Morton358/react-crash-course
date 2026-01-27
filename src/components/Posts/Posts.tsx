import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import classes from './Posts.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Posts = ({ isNewPostVisible, onCloseNewPost }: { isNewPostVisible: boolean; onCloseNewPost: () => void }) => {
  const [postsData, setPostsData] = useState<{ name: string; text: string }[]>([]);

  const addPostHandler = (post: { name: string; text: string }) => {
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
      {postsData.length === 0 && <h3 className={classes['no-posts']}>No posts added yet.</h3>}
      {postsData.length > 0 && (
        <ul className={classes.posts}>
          {postsData.map((post, index) => (
            <Post key={index} author={post.name} body={post.text} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;

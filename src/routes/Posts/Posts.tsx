import Post from '../../components/Post/Post';
import classes from './Posts.module.css';
import { Outlet, useLoaderData } from 'react-router-dom';

const Posts = () => {
  const postsData = useLoaderData() as { name: string; text: string }[];

  return (
    <>
      <main>
        <Outlet />
        {postsData.length === 0 && <h3 className={classes['no-posts']}>No posts added yet.</h3>}
        {postsData.length > 0 && (
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

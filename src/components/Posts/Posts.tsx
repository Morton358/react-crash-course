import Post from '../Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
  return (
    <ul className={classes.posts}>
      <Post author='John Doe' body='React.js is awesome' />
      <Post author='Jane Smith' body='I love coding!' />
    </ul>
  );
};

export default Posts;

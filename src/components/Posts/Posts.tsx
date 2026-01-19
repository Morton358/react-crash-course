import { useState } from 'react';
import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
  const [newPostText, setNewPostText] = useState('');
  const [newPostName, setNewPostName] = useState('');

  const newPostTextChangedHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  const newPostNameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostName(event.target.value);
  };

  return (
    <>
      <NewPost onNameChange={newPostNameChangedHandler} onTextChange={newPostTextChangedHandler} />
      <ul className={classes.posts}>
        <Post author={newPostName} body={newPostText} />
        <Post author='Jane Smith' body='I love coding!' />
      </ul>
    </>
  );
};

export default Posts;

import { useState } from 'react';
import classes from './NewPost.module.css';

const NewPost = ({ onAddPost, onClose }: { onAddPost: (post: { name: string; text: string }) => void; onClose: () => void }) => {
  const [newPostText, setNewPostText] = useState('');
  const [newPostName, setNewPostName] = useState('');

  const newPostTextChangedHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.target.value);
  };

  const newPostNameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostName(event.target.value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newPostData = {
      name: newPostName,
      text: newPostText,
    };
    onAddPost(newPostData);
    onClose();
  };
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <p>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' required onChange={newPostNameChangedHandler} />
      </p>
      <p>
        <label htmlFor='text'>Text</label>
        <textarea id='text' rows={5} required onChange={newPostTextChangedHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onClose}>
          Cancel
        </button>
        <button type='submit'>Add Post</button>
      </p>
    </form>
  );
};

export default NewPost;

import { Form, useNavigate } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../../components/Modal/Modal';

const NewPost = () => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('/');
  };

  return (
    <Modal onClose={closeHandler}>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' required />
        </p>
        <p>
          <label htmlFor='text'>Text</label>
          <textarea id='text' name='text' rows={5} required />
        </p>
        <p className={classes.actions}>
          <button type='button' onClick={closeHandler}>
            Cancel
          </button>
          <button type='submit'>Add Post</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

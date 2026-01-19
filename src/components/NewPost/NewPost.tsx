import classes from './NewPost.module.css';

const NewPost = () => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' required />
      </p>
      <p>
        <label htmlFor='new-post'>Text</label>
        <textarea id='new-post' rows={5} required />
      </p>
    </form>
  );
};

export default NewPost;

import classes from './NewPost.module.css';

const NewPost = ({
  onNameChange,
  onTextChange,
}: {
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' required onChange={onNameChange} />
      </p>
      <p>
        <label htmlFor='new-post'>Text</label>
        <textarea id='new-post' rows={5} required onChange={onTextChange} />
      </p>
    </form>
  );
};

export default NewPost;

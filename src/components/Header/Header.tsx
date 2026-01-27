import { BiSolidMessageRoundedAdd } from 'react-icons/bi';
import { SiMicrodotblog } from 'react-icons/si';
import classes from './Header.module.css';

function Header({ onCreatePost }: { onCreatePost: () => void }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <SiMicrodotblog />
        My Posts
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          New Post
          <BiSolidMessageRoundedAdd size={18} />
        </button>
      </p>
    </header>
  );
}

export default Header;

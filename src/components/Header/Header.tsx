import { BiSolidMessageRoundedAdd } from 'react-icons/bi';
import { SiMicrodotblog } from 'react-icons/si';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <SiMicrodotblog />
        My Posts
      </h1>
      <p>
        <Link to="/new-post" className={classes.button}>
          New Post
          <BiSolidMessageRoundedAdd size={18} />
        </Link>
      </p>
    </header>
  );
}

export default Header;

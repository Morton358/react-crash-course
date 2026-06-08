import { useLoaderData, Link, useNavigate } from 'react-router-dom';

import Modal from '../../components/Modal/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();
  const navigate = useNavigate();

  if (!post) {
    return (
      <Modal onClose={() => navigate('..')}>
        <button className={classes.closeBtn} onClick={() => navigate('..')}>&#x2715;</button>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to='..' className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal onClose={() => navigate('..')}>
      <button className={classes.closeBtn} onClick={() => navigate('..')}>&#x2715;</button>
      <main className={classes.details}>
        <p className={classes.author}>{post.name}</p>
        <p className={classes.text}>{post.text}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

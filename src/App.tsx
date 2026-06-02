import { useState } from 'react';
import './App.css';
import Posts from './routes/Posts/Posts';

const App = () => {
  const [isNewPostVisible, setIsNewPostVisible] = useState(false);

  return (
    <>
      <main>
        <Posts isNewPostVisible={isNewPostVisible} onCloseNewPost={hideNewPostHandler} />
      </main>
    </>
  );
};

export default App;

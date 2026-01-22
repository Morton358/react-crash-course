import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

import Posts from './components/Posts/Posts';

const App = () => {
  const [isNewPostVisible, setIsNewPostVisible] = useState(false);

  const showNewPostHandler = () => {
    setIsNewPostVisible(true);
  };

  const hideNewPostHandler = () => {
    setIsNewPostVisible(false);
  };

  return (
    <>
      <Header onCreatePost={showNewPostHandler} />
      <main>
        <Posts isNewPostVisible={isNewPostVisible} onCloseNewPost={hideNewPostHandler} />
      </main>
    </>
  );
};

export default App;

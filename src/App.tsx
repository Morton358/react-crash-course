import './App.css';
import Post from './components/Post';

function App() {
  return (
    <main>
      <Post author='John Doe' body='React.js is awesome' />
      <Post author='Jane Smith' body='I love coding!' />
    </main>
  );
}

export default App;

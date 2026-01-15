const names = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'Elijah', 'Sophia', 'James', 'Isabella'];

function Post() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  return (
    <div>
      <p>{randomName}</p>
      <p>React.js is awesome</p>
    </div>
  );
}

export default Post;
